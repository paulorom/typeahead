# Task: Typeahead Frontend

## Description

Typeahead or autocomplete is a common feature that people come across on websites. For example, when you are searching on Google, you will notice a word populates before you finish typing.

## Specific requirements

When brainstorming how should our Typeahead system work, we had the following ideas:

- [ ] whenever the user focuses on the text field, it should show the list of suggestions for either no prefix (if the field was empty) or the currently written prefix if any
- [ ] whenever the text input looses focus (either because of clicking away or becasue of pressing Tab for example) the suggestions should disappear, so they don't keep covering the rest of the app
- [ ] when the user writes something in the text field, it should continuously fetch and show suggestions for anything written, updating it live, without the need to click a button or press the ENTER key or anything else
- [ ] we don't want to blow up our API by sending so many unnecessary requests, so whenever the text field is changed, instead of immediately sending a request, it should wait for 250 ms of no new changes before actually sending a request to the API (write "a", then wait 200 ms and write "b" => no request is sent yet; after 100 ms write "c", then wait for 251 ms without writing anything else => request get sent for "abc")
- [ ] of course, while the suggestions are loading, the field should show a loading indicator, specially useful if getting the suggestions takes long in some cases
- [ ] once the suggestions appear, hovering the mouse pointer on any specific suggestion should highlight it; the same should happen if, still with the field focused, the user presses up or down arrow keys on their keyboard
  - [ ] if the user presses up/down while the first/last suggestion is highlighted, then it should highlight the last/first suggestion, cycling through them
  - [ ] if no suggestion is highlighted, pressing up/down keys should start highlighting the last/first suggestion
- [ ] if the user picks one of the suggestions, it should send a POST request with the picked name and show it in the list of "chosen suggestions". Note the UI does not need to wait for the POST request to be finished before being updated, since the result of that request doesn't really matter in the UI (the selection is local, client-only, the request is just so the back-end can know how many times each name gets picked)
- [ ] in order to pick one of the suggestions, the user can click on one of them, or press the ENTER key while one of the suggestions is highlighted
- [ ] after the user picks one of the suggestions, the suggestions should disappear, the field should be cleared and it should loose focus

We implemented some automated end-to-end tests for this, and the repo is configured to run them on every push to the `master` branch. Those tests rely on a specific HTML structure so, as mentioned before, you should not change that or the tests might not pass.

Originally this app was implemented using React Hooks, but if you prefer using classes that's also ok.

## How to work on the task

### Before you start

This app was created with create-react-app, but you can change anything you need that doesn't impact the resulting HTML structure. As mentioned, though, you should only need to change JavaScript code to fix this app; even more, you probably won't need to make changes other than in a couple of components (but you should probably read the rest of the app so you can fully understand the context).

You will also see there is a `Dockerfile`. You shouldn't need to change this file. It's prepared to generate a production build of your app and then create a simple server using the `serve` npm package. This is how your app will get tested, but for your development you can simply use the usual `yarn` and `yarn start` commands. For normal scenarios, the production build tested should be equivalent to what you will see when running in development mode.

### Automated tests

Whenever you push commits to the `master` branch, you will trigger our automated tests. See [here](https://github.com/matilda-applicants/common-tasks-instructions/wiki/Automatic-task-validation) for details on how to check the automated tests results and see useful logs in case of a failure.

The `master` branch is thus special. These automated tests are not meant to do TDD; you can do TDD if you want, but writing your own tests :). You should treat pushes to `master` as you would treat production deployments. If the automated tests fail, it's like a production bug, and the logs covered in red are your users' complaints. You don't want that, do you? Feel free to use any other branch on this repository, as well as the pull requests and issues if you need to. Just be mindful about `master`.

### Submitting your task

Before you submit your task, you need to make sure the tests on your `master` branch's latest commit (HEAD) are successful. The submission will be just that: the latest commit on `master`. So when you are ready, just **let us know** (engineers@matildaexp.com) and we'll proceed with the human revision.

## Evaluation

From the previous explanation you know there are automated tests and a human revision once those automated tests pass. The evaluation criteria for the automated tests is simple: be green. Tests cover a large amount of cases, so being green ensures the correctness of your solution.

As for the human revision, the actual result will not only depend on what you submitted, but also on the level of seniority we expect from you (taken from your application to the job). But in general, the human revision is focused on:

- **good code**: what does this mean exactly? we want to learn what it means to you by looking at the code you write
- **performant code**: we won't expect the most performant solution possible, but we do expect you to be mindful about performance. You can tell that from the code you write
- **good solution**: although this is a ficticious and fairly short task, we expect you implement it as you would in a real job; don't focus on showcasing specific skills or knowledge, focus on showcasing what a great engineer you can be for a real company

Have fun!
