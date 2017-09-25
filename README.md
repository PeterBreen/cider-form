# Cider Form
A companion for my [Cider Tasting](https://github.com/PeterBreen/cider-site) site, because writing JSON by hand is time consuming. This form generates output which can be copied and pasted straight into the ciderlist.json from that site.

I deliberately chose not to make it update the json directly; while that would probably be the logical end-state for a larger app, it's not needed here until/unless I refactor the cider site again.

## How to use
Fill in the form (all fields) with your tasting notes and submit. Repeat for as many ciders as you want to add to the json. After each submit, the app will append JSON ready to be copy-pasted in the Output Results section. When done, copy and paste into ciderlist.json, save, and upload.

### Resources / Thanks to
Uses [React JSON Schema Form](https://github.com/mozilla-services/react-jsonschema-form).  
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  
