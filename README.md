## Description

Typeahead or autocomplete is a common feature that people come across on websites. For example, when you are searching on Google, you will notice a word populates before you finish typing.

## Specific requirements

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







- **good code**: what does this mean exactly? we want to learn what it means to you by looking at the code you write
- **performant code**: we won't expect the most performant solution possible, but we do expect you to be mindful about performance. You can tell that from the code you write
- **good solution**: although this is a ficticious and fairly short task, we expect you implement it as you would in a real job; don't focus on showcasing specific skills or knowledge, focus on showcasing what a great engineer you can be for a real company

Have fun!
