const getters = {
    // app
    screen_width: state => state.app.screen_width,
    pc_width: state => state.app.pc_width,
    pc_bol: state => state.app.pc_bol,

    // blog
    blogTypes: state => state.blog.types,
    currType: state => state.blog.currType,
    blogList: state => state.blog.list,
    blogList: state => state.blog.list,
    blogInfo: state => state.blog.info,
    blogLoadingMore: state => state.blog.loadingMore,
    blogLoadingBol: state => state.blog.loadingBol


}
export default getters