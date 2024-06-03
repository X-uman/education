```
.view-content {
z-index: 0;
}

img[alt^="masthead-fade"] {
width: 100%;
margin: 0px auto;
position: absolute;
top: 0;
left: 0;
-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
opacity: 0.4;
z-index: -1;
}
```

