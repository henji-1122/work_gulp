$(($) => {
    const $body = $("html, body")
    // 回到顶部
    $("#scroll_top").on("click", () => {
        $body.animate({ scrollTop: 0 }, 100)
        return false
    })
})