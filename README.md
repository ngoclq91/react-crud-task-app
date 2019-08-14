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

## 2. Hiển thị list task

### 2.1 LocalStorage & SessionStorage
- Giúp save data tạm thời ở trình duyệt. Và nó lưu ở tab Application của màn hình implement.
- LocalStorage tương tự như cookie, sessionStorage tương tự như session
- localStorageにデータを保存する場合、1つのキー（key）に対して1つのデータしか保存できないが、
複数のデータを保存・取得したいときの方法をまとめておく。
- localStorageは、cookieのようにデータをブラウザで永続的に保存できる仕組みで、データは、キー（key）と値（value）の組み合わせで保存される。
- LocalStorage hơn SessionStorage ở chỗ có thể lưu đến ~5MB
- LocalStorage sẽ mất đi khi xoá lịch sử or sử dụng lệnh javascript để xoá.
- SessionStorage tương đồng với session là sẽ mất đi khi đóng trình duyêt.
- |WebStorage  |localStorage      |sessionStorage     |
  |------------|------------------|-------------------|
  |ライフサイクル |ブラウザを閉じても持続 |ブラウザを開いてる間のみ|
- 保存方法: 
    - `localStorage.setItem(key, value);` //keyとvalueをペアにしてデータを保存
    ```js
      sessionStorage.key = 'value';
      sessionStorage['key'] = 'value';
      sessionStorage.setItem('key', 'value');
    ```
- 取得方法:
    - `localStorage.getItem(key);`//keyに対応するvalueを取得
    - `sessionStorage.getItem('key');`
- 複数データの保存:
    - localStorageに複数データを保存する場合、1つのキー（key）に1つずつデータを保存していってもいいのですが、複数のデータをまとめて、オブジェクトとして1つのキー（key）に保存できる。なので、データを保存する前に、文字列に一旦変換する必要がある。JSON形式のデータを文字列に変換するために、JSON.stringify()メソッドを利用する。
    - `localStorage.setItem("datalist", JSON.stringify(datalist));`
    - また、データを取得するには、getItem()で取得した文字列データをJSON形式に戻す必要がある。JSON形式に戻すには、JSON.parse()メソッドを利用する。
    - `JSON.parse(localStorage.getItem("datalist"))`  // -> {"data1":"hoge1", "data2":"hoge2"}
- データ削除:
    - `localStorage.removeItem('key');`
    - `sessionStorage.removeItem('key')`
- 初期化
    - `localStorage.clear()`
    - `sessionStorage.clear()`

### 2.2. Tạo dữ liệu task mẫu:
- Mục đích: để tạo ra list task, rồi save list task đó vào localStorage, rồi get nó để show ra màn hình danh sách task.
- Sử dụng:
    1. Tự viết hàm random id theo kiểu uuid, để id của mỗi task ko trùng nhau:
    ```js
      onGenerateData = () => {
          let tasks = [
              {
                  id : this.generateUUID(),
                  name: 'hoc lap trinh',
                  status: true
              },
              {
                  id : this.generateUUID(),
                  name: 'meeting',
                  status: false
              },
              {
                  id : this.generateUUID(),
                  name: 'hoc tieng nhat',
                  status: true
              }
          ];
          localStorage.setItem('taskList', JSON.stringify(tasks));
      };
  
      generateUUID = () => {
          return (
              [1e7]+-1e3+-4e3+-8e3+-1e11
          ).replace(/[108]/g, c => (
              (c ^ crypto.getRandomValues(new Uint8Array(1))[0])
              &
              (15 >> c / 4)
          ).toString(16))
      };
    ```
    2. Sử dụng package [uuid](https://www.npmjs.com/package/uuid) hoạc cái package tương tự

### 2.3. Show taskList ra màn hình
- Tại `App.js` ta sử dụng method `componentWillMount()` để ta gắn danh sách task đã generate vào state task để show ra màn hình.
```js
    componentWillMount() {
        if (localStorage && localStorage.getItem('taskList')) {
            let tasks = JSON.parse(localStorage.getItem('taskList'));
            this.setState({
                tasks: tasks
            })
        }
    }
```
