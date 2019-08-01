# React App : CRUD

---

[TOC]

---

## 1. Chuẩn bị
- Install project
    ```bash
        > $ npx create-react-app crud
        > $ cd crud
        > $ rm -rf .git
        > $ touch .bowerrc
        > $ vim .bowerrc
        {
            "directory" : "public/libs"
        }
        > $ bower init
        > $ bower install font-awesome
        > $ bower install bootstrap4
        > $ bower install jquery
    ```

- Kéo css & js của lib vào file `public/index.html`
```
    <!DOCTYPE html>
    <html lang="en">
        <head>
            ...
            <link rel="stylesheet" href="%PUBLIC_URL%/libs/bootstrap4/dist/css/bootstrap.css">
            <link rel="stylesheet" href="%PUBLIC_URL%/libs/font-awsome/css/all.css">
            <title>React App : CRUD</title>
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <script src="%PUBLIC_URL%/libs/jquery/dist/jquery.min.js"></script>
            <script src="%PUBLIC_URL%/libs/bootstrap4/dist/js/bootstrap.bundle.js"></script>
            <script src="%PUBLIC_URL%/libs/font-awsome/js/all.js"></script>
    <!--    <script src="https://kit.fontawesome.com/f76cb80362.js"></script>-->
        </body>
    </html>
```

---

- Tạo template của app ở file `src/app.js` : tham khảo ở file `src/app_mockup.js`
- Chia component :
    1. `TaskForm.js` : là component cho form add new task
    2. `Control.js` : là component bao gồm Search, Sort và TableList
        - `Search.js` : là component Search
        - `Sort.js` : là component Sort
        - `TaskList.js`: là component hiển thị list all task
            - `TaskItem.js` : là component hiển thị item của mỗi task
