package com.brycen.hrm.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.brycen.hrm.constant.MessageValue;
import com.brycen.hrm.entity.Employee;
import com.brycen.hrm.entity.OptionPoll;
import com.brycen.hrm.entity.OptionPollDetail;
import com.brycen.hrm.entity.OptionPollDetailRequestAdd;
import com.brycen.hrm.entity.OptionPollNameRequestAdd;
import com.brycen.hrm.entity.OptionPollRequestAdd;
import com.brycen.hrm.entity.PageResponse;
import com.brycen.hrm.entity.Poll;
import com.brycen.hrm.entity.PollRequestAdd;
import com.brycen.hrm.entity.PollResponse;
import com.brycen.hrm.entity.TopVoteResponse;
import com.brycen.hrm.service.EmployeeService;
import com.brycen.hrm.service.OptionPollDetailService;
import com.brycen.hrm.service.OptionPollService;
import com.brycen.hrm.service.PollService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PollAPI {

	@Autowired
	PollService pollService;

	@Autowired
	OptionPollService optionPollService;

	@Autowired
	OptionPollDetailService optionPollDetailService;

	@Autowired
	EmployeeService employeeService;

	@GetMapping("poll-list")
	public ResponseEntity<List<Poll>> getListPoll() {
		try {
			return new ResponseEntity<>(pollService.getListPoll(), HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("pollresponse-list")
	public ResponseEntity<List<PollResponse>> getListPollResponse(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "10") int size,
			@RequestParam(name = "text", defaultValue = "") String text) {
		try {
			// return new ResponseEntity<>(pollService.getListPollResponse(),
			// HttpStatus.OK);
			return new ResponseEntity<>(null, HttpStatus.OK);

		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("optionpoll-list")
	public ResponseEntity<List<OptionPoll>> getListOptionPoll() {
		try {
			return new ResponseEntity<>(optionPollService.getListOptionPoll(), HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("optionpolldetail-list")
	public ResponseEntity<List<OptionPollDetail>> getListOptionPollDetail() {
		try {
			return new ResponseEntity<>(optionPollDetailService.getListOptionPollDetail(), HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("topvotes-list")
	public ResponseEntity<List<TopVoteResponse>> getListTopVote() {
		try {
			return new ResponseEntity<>(optionPollService.getListTopVote(), HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("poll-delete/{pollId}")
	public ResponseEntity<Boolean> deletePoll(@PathVariable("pollId") int id) {
		try {
			pollService.deletePoll(id);
			return new ResponseEntity<>(true, HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("pageable")
	public ResponseEntity<PageResponse> list(@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size,
			@RequestParam(name = "text", defaultValue = "") String text) {
		PageRequest pageRequest = PageRequest.of(page, size, Sort.by("pollId").ascending());
		PageResponse pageResponse;
		if (text.equals("")) {
			Page<Poll> pageResult = pollService.findAll(pageRequest);
			pageResponse = new PageResponse(pageResult.getContent(), pageResult.getTotalElements(),
					pageResult.getNumber(), pageResult.getSize());
		} else {
			Page<Poll> pageResult = pollService.getPollByTextSearch(text, pageRequest);
			pageResponse = new PageResponse(pageResult.getContent(), pageResult.getTotalElements(),
					pageResult.getNumber(), pageResult.getSize());
		}
		return new ResponseEntity<>(pageResponse, HttpStatus.OK);
	}

	@PostMapping("save-poll")
	public ResponseEntity<String> savePoll(@RequestBody PollRequestAdd pollRequest) {
		try {
			// Get employee information by id login
			Employee emp = employeeService.getEmployeeById(pollRequest.getCreateBy());
			// Set data Poll insert to Database
			Poll poll = new Poll();
			poll.setQuestion(pollRequest.getQuestion());
			poll.setExpiration(pollRequest.getExpiration());
			poll.setAllowMultiple(pollRequest.getAllowMuptiple());
			poll.setCreateDate(pollRequest.getCreateDate());
			poll.setIsDelete(0);
			poll.setStatus(pollRequest.getStatus());
			poll.setUpdateBy(null);
			poll.setUpdateDate(null);
			poll.setCreateBy(emp);
			Poll pollResponse = pollService.savePoll(poll);

			// Loop data insert OptionPoll
			for (OptionPollNameRequestAdd op : pollRequest.getOptionPoll()) {
				OptionPoll optionPoll = new OptionPoll();
				optionPoll.setOptionName(op.getOptionName());
				optionPoll.setCreateDate(pollRequest.getCreateDate());
				optionPoll.setCreateBy(emp);
				optionPoll.setUpdateDate(null);
				optionPoll.setUpdateBy(null);
				optionPoll.setIsDelete(0);
				optionPoll.setPoll(pollResponse);
				optionPollService.saveOptionPoll(optionPoll);
			}
			return new ResponseEntity<>(MessageValue.INSERT_SUCCESS_POLL, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(MessageValue.INSERT_FAILE_POLL, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("poll-getbyid")
	public ResponseEntity<Poll> getPoll(@RequestParam(name = "pollId") int pollId) {
		try {

			return new ResponseEntity<>(pollService.getPollById(pollId), HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("optionpoll-getbypollid")
	public ResponseEntity<List<OptionPoll>> getOptionPoll(@RequestParam(name = "pollId") int pollId) {
		try {

			return new ResponseEntity<>(optionPollService.getOptionPollByPollId(pollId), HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("optionpolldetail-getbyoptionid")
	public ResponseEntity<List<OptionPollDetail>> getOptionPoll(
			@RequestParam(name = "optionPollId") int[] optionPollId) {
		try {

			return new ResponseEntity<>(optionPollDetailService.getOptionPollDetailByOptionId(optionPollId),
					HttpStatus.OK);
		} catch (Exception exception) {
			exception.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("save-optionpoll")
	public ResponseEntity<Boolean> saveOptionPoll(@RequestBody OptionPollRequestAdd optionPollRequest) {
		try {
			// Get employee information by id login
			Employee emp = employeeService.getEmployeeById(optionPollRequest.getCreateBy());
			// Set data Poll
			Poll poll = pollService.getPollById(optionPollRequest.getPollId());
			// Set data insert OptionPoll
			OptionPoll optionPoll = new OptionPoll();
			optionPoll.setOptionName(optionPollRequest.getOptionName());
			optionPoll.setCreateDate(optionPollRequest.getCreateDate());
			optionPoll.setCreateBy(emp);
			optionPoll.setUpdateDate(null);
			optionPoll.setUpdateBy(null);
			optionPoll.setIsDelete(0);
			optionPoll.setPoll(poll);
			optionPollService.saveOptionPoll(optionPoll);

			return new ResponseEntity<>(true, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("save-optionpolldetail")
	public ResponseEntity<Boolean> saveOptionPollDetail(
			@RequestBody OptionPollDetailRequestAdd optionPollDetailRequest) {
		try {
			int[] arr = optionPollDetailRequest.getListOptionId();
			if (optionPollDetailRequest.getAllowMultiple() == 0) {
				optionPollDetailService.deleteOptionPollDetail(arr, optionPollDetailRequest.getVoteBy());
			}
			// Get employee information by id login
			Employee emp = employeeService.getEmployeeById(optionPollDetailRequest.getVoteBy());
			// Set data OptionPoll
			OptionPoll optionPoll = optionPollService.getOptionPollById(optionPollDetailRequest.getOptionId());
			// Set data insert OptionPollDetail
			OptionPollDetail opd = new OptionPollDetail();
			opd.setOptionPoll(optionPoll);
			opd.setVoteBy(emp);
			opd.setVoteDate(optionPollDetailRequest.getVoteDate());
			optionPollDetailService.saveOptionPollDetail(opd);
			return new ResponseEntity<>(true, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("delete-optionpolldetail")
	public ResponseEntity<Boolean> deleteOptionPollDetail(@RequestParam(name = "optionId") int optionId,
			@RequestParam(name = "voteBy") long voteBy) {
		try {
			int[] optionIds = new int[] { optionId };
			optionPollDetailService.deleteOptionPollDetail(optionIds, voteBy);
			return new ResponseEntity<>(true, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
		}
	}

}
