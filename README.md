Text Scroller - jQuery plugin for scroling div
================================================

jQuery plugin for scrolling text in a DIV.

##Installing
Include jQuery library and Text Scroller plugin:
```html
<script src="jquery.textscroller.js"></script>
```

##Usage
DIV with text must be set and adjusted height
```css
height: 305px;
```

scroller DIV must have css, height and with may be changed
```css
.ts-scroller-wraper { height: 285px; width: 10px; position: relative; }
.ts-scroller-wraper > div { width: 10px; height: 10px; position: absolute; top: 0; left: 0; overflow: hidden; }
```

start plugin
```javascript
$('#custom-textarea').textscroller();
```

##License

Plugin is released under the [MIT License](http://en.wikipedia.org/wiki/MIT_License). Feel free to use it in personal and commercial projects.

##Versions

* 1.0.0 - Firest reles




