Đồ án cuối kì môn Các công nghệ mới trong phát triển phần mềm
- Cấu trúc thư mục:
    + components: chứa các component chỉ render và không sử logic
        + Home (tên component)
            home.js: component
            style.css: css của component đó
    + config: chứa các file cấu hình của project
    + containers: chứa các xử lý của component
        + HomeContainer
            HomeContainer.js: xữ lý logic của component Home
            action.js: các action redux của component đó
    + globalStyle: các css toàn cục
    + img: chứa tất cả hình ảnh
    + reducers:
        + rootReducer: tổng hợp các reducers
        + các reducers con
