<a name="1.1.2"></a>
## [1.1.2](https://github.com/wheeljs/metro-lcd/compare/v1.1.1...v1.1.2) (2024-04-26)


### Bug Fixes

* **changelog:** correct `changelog.component.html` when re-generate ([2ca04a7](https://github.com/wheeljs/metro-lcd/commit/2ca04a7))


### Chores

* manually generate changelog ([0a2ba29](https://github.com/wheeljs/metro-lcd/commit/0a2ba29))


### Documentation

* **CHANGELOG:** add v1.1.1 ([3ca5019](https://github.com/wheeljs/metro-lcd/commit/3ca5019))
* **README:** add page build badge ([8f462c2](https://github.com/wheeljs/metro-lcd/commit/8f462c2))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/wheeljs/metro-lcd/compare/v1.1.0...v1.1.1) (2024-04-26)


### Chores

* add CHANGELOG.md ([5836ced](https://github.com/wheeljs/metro-lcd/commit/5836ced))


### Continuous Integrations

* tag before build for generate changelog ([a62a70c](https://github.com/wheeljs/metro-lcd/commit/a62a70c))
* tag on source branch commit ([97c905a](https://github.com/wheeljs/metro-lcd/commit/97c905a))


### Documentation

* **README:** update style ([22ba90f](https://github.com/wheeljs/metro-lcd/commit/22ba90f))


### Features

* **changelog:** add changelog dialog ([a4fa9b0](https://github.com/wheeljs/metro-lcd/commit/a4fa9b0))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/wheeljs/metro-lcd/compare/v1.0.6...v1.1.0) (2024-04-24)


### Bug Fixes

* **dashboard/monthly-data:** fix grid item sizes ([d624677](https://github.com/wheeljs/metro-lcd/commit/d624677))
* **dashboard:** change .sidenav-toggle to fixed ([cbcc74e](https://github.com/wheeljs/metro-lcd/commit/cbcc74e))
* **dashboard:** margin for summaries ([5b0d785](https://github.com/wheeljs/metro-lcd/commit/5b0d785))
* **lcd/player:** reset autoplay when user pause audio playing ([a18f0f1](https://github.com/wheeljs/metro-lcd/commit/a18f0f1))
* **lcd/station:** text-shadow for recoding video ([b15d05d](https://github.com/wheeljs/metro-lcd/commit/b15d05d))


### Chores

* add tail comma ([d139ab8](https://github.com/wheeljs/metro-lcd/commit/d139ab8))
* **angular.json:** set packageManager to pnpm ([5066973](https://github.com/wheeljs/metro-lcd/commit/5066973))
* auto merge main into develop ([302e566](https://github.com/wheeljs/metro-lcd/commit/302e566))
* **dashboard/data:** update ref ([4fc7ca7](https://github.com/wheeljs/metro-lcd/commit/4fc7ca7))
* fix build error ([a9c884b](https://github.com/wheeljs/metro-lcd/commit/a9c884b))
* fix build error ([c3a0894](https://github.com/wheeljs/metro-lcd/commit/c3a0894))
* update angular version ([2d8e856](https://github.com/wheeljs/metro-lcd/commit/2d8e856))


### Code Refactoring

* **dashboard/data:** remove unused url field when generating ([da60a9d](https://github.com/wheeljs/metro-lcd/commit/da60a9d))
* **dashboard/statistic-item:** use `isFirstChange()` instead of `firstChange` ([1444faa](https://github.com/wheeljs/metro-lcd/commit/1444faa))
* **dashboard/types:** re-organize type defs ([982ba2e](https://github.com/wheeljs/metro-lcd/commit/982ba2e))
* **dashboard:** add `DataVMService` for get data vm ([9cd6317](https://github.com/wheeljs/metro-lcd/commit/9cd6317))
* **dashboard:** change <mat-spinner> to <nz-spin> ([bc59268](https://github.com/wheeljs/metro-lcd/commit/bc59268))
* **dashboard:** extract vm function to file ([7667372](https://github.com/wheeljs/metro-lcd/commit/7667372))
* **dashboard:** move ngx-echarts registration into ui module ([2818104](https://github.com/wheeljs/metro-lcd/commit/2818104))
* **dashboard:** reorganize new lines and new segments ([8814695](https://github.com/wheeljs/metro-lcd/commit/8814695))
* **dashboard:** split cities chart into component ([d51e69f](https://github.com/wheeljs/metro-lcd/commit/d51e69f))
* split ui imports from shared module into ui module ([1eb9b7e](https://github.com/wheeljs/metro-lcd/commit/1eb9b7e))


### Features

* add ng-zorro-antd ([7373207](https://github.com/wheeljs/metro-lcd/commit/7373207))
* **dashboard/data:** add `newSegments` ([aa20bbc](https://github.com/wheeljs/metro-lcd/commit/aa20bbc))
* **dashboard/data:** calculate some compare data ([822eb78](https://github.com/wheeljs/metro-lcd/commit/822eb78))
* **dashboard/monthly-data:** add chart for passengerCapacity, inStationCapacity and passengerStrong ([d75899b](https://github.com/wheeljs/metro-lcd/commit/d75899b))
* **dashboard/monthly-data:** collapse new lines detail into popover ([4420e3c](https://github.com/wheeljs/metro-lcd/commit/4420e3c))
* **dashboard/monthly-data:** compare volume data ([dfff1b1](https://github.com/wheeljs/metro-lcd/commit/dfff1b1))
* **dashboard/monthly-data:** subtitle for volume ([0a75571](https://github.com/wheeljs/metro-lcd/commit/0a75571))
* **dashboard/statistic-item:** add `prefixMode` for auto prefix icon ([a4d6f9a](https://github.com/wheeljs/metro-lcd/commit/a4d6f9a))
* **dashboard:** display monthly data ([fa61ae7](https://github.com/wheeljs/metro-lcd/commit/fa61ae7))
* **dashboard:** show volume diff switch ([4f1895d](https://github.com/wheeljs/metro-lcd/commit/4f1895d))
* **dashboard:** title ([443a7d5](https://github.com/wheeljs/metro-lcd/commit/443a7d5))



<a name="1.0.6"></a>
## [1.0.6](https://github.com/wheeljs/metro-lcd/compare/v1.0.5...v1.0.6) (2024-04-20)


### Chores

* remove `noPropertyAccessFromIndexSignature` ([8eb4e03](https://github.com/wheeljs/metro-lcd/commit/8eb4e03))
* split actions into two steps ([185bbf9](https://github.com/wheeljs/metro-lcd/commit/185bbf9))


### Code Refactoring

* **lcd/route:** extract horizontal padding to parent ([464b289](https://github.com/wheeljs/metro-lcd/commit/464b289))
* **lcd/running-line:** add shareReplay(1) ([86a639f](https://github.com/wheeljs/metro-lcd/commit/86a639f))
* **README:** Add instructions for running the project ([cd0d750](https://github.com/wheeljs/metro-lcd/commit/cd0d750))


### Features

* **lcd/subtitle:** display subtitle ([6400dc0](https://github.com/wheeljs/metro-lcd/commit/6400dc0))
* **line/2:** english voices ([cc3f010](https://github.com/wheeljs/metro-lcd/commit/cc3f010))
* **line/2:** update english translation to match voice ([3c193c8](https://github.com/wheeljs/metro-lcd/commit/3c193c8))
* **line:** support voice with subtitle ([448fe47](https://github.com/wheeljs/metro-lcd/commit/448fe47))
* **subtitle:** add subtitle for common voices ([4f913a1](https://github.com/wheeljs/metro-lcd/commit/4f913a1))
* **subtitle:** subtitle generate ([6ed4696](https://github.com/wheeljs/metro-lcd/commit/6ed4696))



<a name="1.0.5"></a>
## [1.0.5](https://github.com/wheeljs/metro-lcd/compare/v1.0.4...v1.0.5) (2024-04-15)


### Bug Fixes

* **dashboard:** title ([05d38df](https://github.com/wheeljs/metro-lcd/commit/05d38df))
* **dashboard:** url not change after range change ([2296c1f](https://github.com/wheeljs/metro-lcd/commit/2296c1f))


### Chores

* remove --rebase flag ([c5ab6cc](https://github.com/wheeljs/metro-lcd/commit/c5ab6cc))
* use merge instead of rebase ([10d8793](https://github.com/wheeljs/metro-lcd/commit/10d8793))



<a name="1.0.4"></a>
## [1.0.4](https://github.com/wheeljs/metro-lcd/compare/v1.0.3...v1.0.4) (2024-04-15)


### Chores

* checkout with submodules ([8899746](https://github.com/wheeljs/metro-lcd/commit/8899746))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/wheeljs/metro-lcd/compare/v1.0.2...v1.0.3) (2024-04-15)


### Chores

* action for auto merge release pr.yml ([3b2146b](https://github.com/wheeljs/metro-lcd/commit/3b2146b))
* action for auto merge release pr.yml ([3490da8](https://github.com/wheeljs/metro-lcd/commit/3490da8))
* action for auto merge release pr.yml ([e64bbc6](https://github.com/wheeljs/metro-lcd/commit/e64bbc6))
* action for auto merge release pr.yml ([1c1e988](https://github.com/wheeljs/metro-lcd/commit/1c1e988))
* action for auto merge release pr.yml ([657f70b](https://github.com/wheeljs/metro-lcd/commit/657f70b))
* change to pnpm ([c8b6f2d](https://github.com/wheeljs/metro-lcd/commit/c8b6f2d))
* **data:** update submodule ([437461f](https://github.com/wheeljs/metro-lcd/commit/437461f))
* ga-test.txt ([e57bc0d](https://github.com/wheeljs/metro-lcd/commit/e57bc0d))
* update ga-test.txt ([a98e571](https://github.com/wheeljs/metro-lcd/commit/a98e571))
* update ga-test.txt ([72f8937](https://github.com/wheeljs/metro-lcd/commit/72f8937))
* update ga-test.txt ([4d8cdad](https://github.com/wheeljs/metro-lcd/commit/4d8cdad))
* update ga-test.txt ([3c6f900](https://github.com/wheeljs/metro-lcd/commit/3c6f900))
* update github action to use pnpm ([22077df](https://github.com/wheeljs/metro-lcd/commit/22077df))
* update github action to use pnpm ([80e5980](https://github.com/wheeljs/metro-lcd/commit/80e5980))


### Code Refactoring

* **dashboard:** remove comment codes ([eb34d8d](https://github.com/wheeljs/metro-lcd/commit/eb34d8d))
* **data:** remove firestore imports ([99df72f](https://github.com/wheeljs/metro-lcd/commit/99df72f))
* **data:** use data repository instead of firestore, cause some connection problem in some region ([b608d66](https://github.com/wheeljs/metro-lcd/commit/b608d66))


### Features

* **data:** import data repository as submodule ([ef3a950](https://github.com/wheeljs/metro-lcd/commit/ef3a950))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/wheeljs/metro-lcd/compare/v1.0.1...v1.0.2) (2024-04-14)


### Chores

* action for auto merge release pr.yml ([a1ddd3a](https://github.com/wheeljs/metro-lcd/commit/a1ddd3a))
* action for auto merge release pr.yml ([36be60e](https://github.com/wheeljs/metro-lcd/commit/36be60e))
* add --no-standalone for `ng g c` ([0116834](https://github.com/wheeljs/metro-lcd/commit/0116834))
* create pr when push to release/* branch ([79162be](https://github.com/wheeljs/metro-lcd/commit/79162be))
* **dashboard:** remove unused files ([b57c8f3](https://github.com/wheeljs/metro-lcd/commit/b57c8f3))
* unify angular dependencies version ([1961550](https://github.com/wheeljs/metro-lcd/commit/1961550))


### Code Refactoring

* **app:** add router ([337ac11](https://github.com/wheeljs/metro-lcd/commit/337ac11))
* **app:** add router ([06d418a](https://github.com/wheeljs/metro-lcd/commit/06d418a))


### Features

* **dashboard:** add 2024/2 data ([145abb7](https://github.com/wheeljs/metro-lcd/commit/145abb7))
* **dashboard:** monthly rail transit statistics ([4617f1d](https://github.com/wheeljs/metro-lcd/commit/4617f1d))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/wheeljs/metro-lcd/compare/v1.0.0...v1.0.1) (2024-03-20)


### Bug Fixes

* **lcd/station:** remove text-shadow when station disabled ([d547ccc](https://github.com/wheeljs/metro-lcd/commit/d547ccc))


### Chores

* disable sentry in development mode ([a09f19a](https://github.com/wheeljs/metro-lcd/commit/a09f19a))
* setup sentry ([c5c6d0a](https://github.com/wheeljs/metro-lcd/commit/c5c6d0a))


### Code Refactoring

* **lcd/operation-panel:** extract updateConfig ([5650bad](https://github.com/wheeljs/metro-lcd/commit/5650bad))
* **lcd/station:** edit mode ux ([417c553](https://github.com/wheeljs/metro-lcd/commit/417c553))
* **lcd/station:** use grid fill route rather than calculate line width between stations ([adf9178](https://github.com/wheeljs/metro-lcd/commit/adf9178))
* **lcd:** extract <lcd-operation-panel> from container, add new <lcd-outlet> component ([2b820a1](https://github.com/wheeljs/metro-lcd/commit/2b820a1))
* **types:** split type definitions into multi file ([5e4fdf5](https://github.com/wheeljs/metro-lcd/commit/5e4fdf5))


### Features

* add material design ([9cce0a0](https://github.com/wheeljs/metro-lcd/commit/9cce0a0))
* **lcd/container:** reset container config when line changed ([44da2f4](https://github.com/wheeljs/metro-lcd/commit/44da2f4))
* **lcd/operation-panel:** change to horizontal layout ([66a4a17](https://github.com/wheeljs/metro-lcd/commit/66a4a17))
* **lcd/outlet:** allow user change line ([8d63246](https://github.com/wheeljs/metro-lcd/commit/8d63246))
* **line:** `foregroundColor` config ([8b57570](https://github.com/wheeljs/metro-lcd/commit/8b57570))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/wheeljs/metro-lcd/compare/bee3550...v1.0.0) (2024-03-15)


### Bug Fixes

* assets prefix for deploy to subdirectory ([7263944](https://github.com/wheeljs/metro-lcd/commit/7263944))
* **lcd/header:** align dest to right ([46f395e](https://github.com/wheeljs/metro-lcd/commit/46f395e))
* **lcd/running-line-service:** emit from station into runningSubject ([1eff38e](https://github.com/wheeljs/metro-lcd/commit/1eff38e))
* **lcd/splitor:** change default speed ([984a4ca](https://github.com/wheeljs/metro-lcd/commit/984a4ca))
* **lcd/station:** styles ([670012d](https://github.com/wheeljs/metro-lcd/commit/670012d))
* **line/2:** english translation of station ([960dfde](https://github.com/wheeljs/metro-lcd/commit/960dfde))
* **line/2:** remove transfer to line6 ([be3fc82](https://github.com/wheeljs/metro-lcd/commit/be3fc82))


### Chores

* add editorconfig ([a3fa6c6](https://github.com/wheeljs/metro-lcd/commit/a3fa6c6))
* add ghpages ([0fd958a](https://github.com/wheeljs/metro-lcd/commit/0fd958a))
* github action ([51ac950](https://github.com/wheeljs/metro-lcd/commit/51ac950))
* LICENSE ([#1](https://github.com/wheeljs/metro-lcd/issues/1)) ([51778e2](https://github.com/wheeljs/metro-lcd/commit/51778e2))
* remove lint script execution ([434ace7](https://github.com/wheeljs/metro-lcd/commit/434ace7))
* trailing comma ([6ecc72b](https://github.com/wheeljs/metro-lcd/commit/6ecc72b))


### Code Refactoring

* **lcd/container:** pass real playlist into player component ([26fecea](https://github.com/wheeljs/metro-lcd/commit/26fecea))
* **lcd/defs:** rename directory ([e20a3f3](https://github.com/wheeljs/metro-lcd/commit/e20a3f3))
* **lcd/header:** use filter operator ([c438e41](https://github.com/wheeljs/metro-lcd/commit/c438e41))
* **lcd/header:** use grid layout to centralize station ([d24fe3c](https://github.com/wheeljs/metro-lcd/commit/d24fe3c))
* **lcd/running-line-service:** reuse ContainerConfig for InitLineOptions ([d442805](https://github.com/wheeljs/metro-lcd/commit/d442805))
* **lcd/station:** split arrows in refresh for different line colors ([fe005eb](https://github.com/wheeljs/metro-lcd/commit/fe005eb))
* **lcd/station:** using constants ([d280d5a](https://github.com/wheeljs/metro-lcd/commit/d280d5a))
* **line/2:** move voices into line's directory ([251f3e1](https://github.com/wheeljs/metro-lcd/commit/251f3e1))
* **line:** use `disabled` field indicate station is not in use, instead of `StationStatus.UnOperation` ([52b4190](https://github.com/wheeljs/metro-lcd/commit/52b4190))
* **shared:** extract modules import then export ([8375603](https://github.com/wheeljs/metro-lcd/commit/8375603))


### Features

* **lcd/operation-panel:** add `nextGap` config ([83c93e6](https://github.com/wheeljs/metro-lcd/commit/83c93e6))
* **lcd/operation-panel:** add ContainerConfigService for configurations, add `nextOnAudioEnded` config ([e010509](https://github.com/wheeljs/metro-lcd/commit/e010509))
* **lcd/operation-panel:** copyrights ([25a58ad](https://github.com/wheeljs/metro-lcd/commit/25a58ad))
* **lcd/operation-panel:** move operations to component ([4da3852](https://github.com/wheeljs/metro-lcd/commit/4da3852))
* **lcd/player:** continue playing after user interactived ([ca017b9](https://github.com/wheeljs/metro-lcd/commit/ca017b9))
* **lcd/player:** controls can be disabled ([5e949ab](https://github.com/wheeljs/metro-lcd/commit/5e949ab))
* **lcd/player:** support user specify player controls ([5f3f715](https://github.com/wheeljs/metro-lcd/commit/5f3f715))
* **lcd/station:** allow user specify from, to stations and status of station by ui ([8236df1](https://github.com/wheeljs/metro-lcd/commit/8236df1))
* **lcd/station:** text-shadow ([5178ac7](https://github.com/wheeljs/metro-lcd/commit/5178ac7))
* **voice:** add real voices ([bee3550](https://github.com/wheeljs/metro-lcd/commit/bee3550))
* **voice:** common arriving soon voices ([bbf3ff6](https://github.com/wheeljs/metro-lcd/commit/bbf3ff6))



