
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
  } 
  tR += "---" %>
Title:  <%* tR += title %>

Created: <% tp.date.now("YYYY-MM-DD") %>
---
 [[<% tp.date.now("YYYY-MM-DD") %>]]

 [[<% tp.file.cursor(2) %>]] << >> [[<% tp.file.cursor(3) %>]]
 
---
<% tp.file.cursor(1) %>
```