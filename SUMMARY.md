# Approach

Tried to approach in the TDD way, though think did jump a little bit ahead when done the filter reducer before the Filter component, but in some way prefer to write the Redux/state first as it gives you confidence that logic is sound.

Probably could have demonstrated a little better that tests allow you to refactor things but Redux helps a lot with TDD as you have to think in rather atomic changes already.

One thing that might have caught me out is no coverage for `mapStateToProps` and `mapDispatchToProps` to begin with, where I have done the initial changes but as was doing it over the course of few evenings thing really kep bugging me to added the tests for that area.
Give you more confidence that all things are wired up correctly.

If you go through commit messages you should be able to follow my thinking and approach.

# Improvements that could be done
- [ ] Use more expressive jest assertions throughout
- [ ] Add higher level tests, e.g. Webdriver/Nightwatch + CucumberJS - allows for cross browser testing plus if you decide to change view framework you will still provide value
- [ ] Personal preference ot keep tests next to files they test rather than in folders so probably could change that
- [ ] Split out the reducers a little better, have separate folders for each so it would contain constants, reducer, actions, etc. This layout helps a lot on bigger codebase 
- [ ] Possibly split out containers and components - e.g. dumb ones and containing some logic
- [ ] Make it look better :)
- [ ] Some things could have been named a little better - some of it is mostly cause everything is in one `logic` folder. If was split a little more would make more sense
- [ ] Add some sort of persistence layer - if api probably would need to introduce redux-thunk for async actions. The easiest way would be to use local browser storage so on concurrent visit user could actually see the list of their items
- [ ] A stretch goal after persistence layer would be Service Worker and manifest for offline access? Too far ? :D 
