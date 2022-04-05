# ems-schedule-manager
Schedule manager web app

## Settup
[README-CLI.md](README-CLI.md)

## Store description
[Store-README.md](src/app/store/README.md)

## Folder Structure

``` js
+---.storybook
+---e2e
+---serve ...............................................<------ BFF (Backend for Frontend)
|       serve.ts
|
|---src
|    +---app ............................................<------ Mã nguôn cho ứng dụng
|    |   +---bootstraps..................................<------ Chưa file bootstrap config tại app module
|    |   |   +---bootstrap.ts............................<------ file bootstrap
|    |   |   .gitkeep
|    |   |
|    |   +---main-layout ................................<------ Chứa các thành phần bố cục: Header, Nav, Router, Footer, ...
|    |   |   |   main-layout.component.html
|    |   |   |   main-layout.component.scss
|    |   |   |   main-layout.component.spect.ts
|    |   |   |   main-layout.component.ts
|    |   |   |   main-layout.module.ts
|    |   |   
|    |   |
|    |   +---modules ....................................<------ Chứa danh sách các module độc lập với nhau
|    |   |   +---auth ...................................<------ 1 ví dụ về module auth.
|    |   |   |   +---login ..............................<------ Trang login
|    |   |   |   |   |   login.component.html
|    |   |   |   |   |   login.component.scss
|    |   |   |   |   |   login.component.spec.ts
|    |   |   |   |   |   login.component.ts
|    |   |   |   |
|    |   |   |   +---register ...........................<------ Trang đăng ký
|    |   |   |   auth.module.ts
|    |   |   |   auth.routing.module.ts
|    |   |   |
|    |   |
|    |   +---provider ...................................<------ Provider
|    |   |   +---api ....................................<------ Service to call BFF API
|    |   |       |   api.service.spec.ts
|    |   |       |   api.service.ts
|    |   |
|    |   +---shared .....................................<------ Chứa các class hoăc tài nguyên được sử dụng nhiều trong các module
|    |       +---components .............................<------ Khai báo các component được sử dụng nhiều trong các module
|    |       +---shared.module.ts .......................<------ Khai báo các module shared
|    |   |
|    |   +---store  .....................................<------ Store
|    |   |   +---actions.................................<------ Các action
|    |   |   +---effects.................................<------ Effects
|    |   |   +---models..................................<------ các model
|    |   |   +---reducers................................<------ Các reducer
|    |   |   +---selectors...............................<------ Các selector
|    |   |   +---services................................<------ các service
|    |   |   +---store-facades...........................<------ các lớp đại diện cho mỗi feature của state
|    |   |   +---app-state.ts ...........................<------ Khai báo state chung
|    |   |   +---app-store.module.ts ....................<------ Khai báo module store
|    |   |   +---README.md...............................<------ File README cho store
|    |   |
|    |   |   app-routing.module.ts ......................<------ File cấu hình Router (đường dẫn url) chung của ứng dụng
|    |   |   app.component.html  ........................<------ File template gốc của ứng dụng
|    |   |   app.component.scss
|    |   |   app.component.spec.ts
|    |   |   app.component.ts ...........................<------ File cấu hình chung của cả ứng dụng
|    |   |   app.module.ts
|    |   |
|    +---assets .........................................<------ Thư mục chứa các file ảnh của ứng dụng
|    |
|    +---environments ...................................<------ Cấu hình môi trường ứng dụng
|    |       environment.prod.ts
|    |       environment.ts
|    |
|    +---styles .........................................<------ Lưu trữ styles cho ứng dụng
|    |
|    |   favicon.ico
|    |   index.html
|    |   main.ts
|    |   polyfills.ts
|    |   styles.scss
|    |   test.ts
|
|    .editorconfig
|    .gitignore
|    .gittemplate
|    angular.json
|    browserslist
|    folder-structure.txt
|    karma.conf.js
|    package-lock.json
|    package.json
|    README.md
|    README-CLI.md
|    tsconfig.app.json
|    tsconfig.json
|    tsconfig.spec.json
|    tslint.json
|


```

