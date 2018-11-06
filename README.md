# vueBirthDatepicker
Date picker for distant dates, such as birthday.
Just three clicks to choose any month and day 20 or 50 years ago.
![Screenshot of vue-birth-datepicker](./vue-birth-datepicker-screenshot.png)

## Istallation
```JavaScript
npm i vue-birth-datepicker --S
```
## Inclusion to app
### Import ES6
```JavaScript
import birthDatepicker from 'vue-date-picker';
```
+don't forget to include 'vue-date-picker/dist/vueBirthDatepicker.css' into your styles

### Import with vue-loader and scss-loader
```JavaScript
import birthDatepicker from 'vue-date-picker/src';
```
Don't need to include styles separately in this case

### Browser
```HTML
<script src="https://unpkg.com/vue"></script>
<script src="./vueBirthDatepicker.umd.js"></script>
<link rel="stylesheet" href="./vueBirthDatepicker.css">
```

## Usage
```HTML
<birth-datepicker v-model="date" />
```
