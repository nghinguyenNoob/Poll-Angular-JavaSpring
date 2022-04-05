## Store folder structure
``` js
+---store                         //------ Store module
  |   +---actions                 //------ Action folder: All actions declare here
  |   +---effects                 //------ Effects folder: All effects declare here 
  |   +---models                  //------ Declare object model
  |   +---reducers                //------ Declare state features and reducers
  |   +---selectors               //------ Declare selectors
  |   +---services                //------ Service
  |   +---store-facades           //------ Store facade for each store feature
  |   +---app-state.ts            //------ Declare general state (AppState)
  |   +---app-store.module.ts     //------ Config store module
```

## New declaration
``` js
    model                          🠮       models folder
    action                         🠮       actions folder
    App state                      🠮       file app-state.ts
    feature state                  🠮       reducers folder (on file .reducer.ts file and above reducer codes)
    reducer                        🠮       reducers folder
    selector                       🠮       selectors folder
    service                        🠮       services folder
    store-facade                   🠮       store-facades folder
    effect                         🠮       effects folder
    config store                   🠮       file app-store.module.ts
```


## State structure
``` js
AppState = {                      //-------------- App State

}

```
