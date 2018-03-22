export default function (Vue) {
    Vue.directive("height", {
        inserted(el, binding) {
             $(el).height($(window).height() - binding.value)
           
        }
    }),
    Vue.directive("dx", {
            inserted(el, binding) {
               if(binding.value==null){
                    return
                }else{

                    var top=300;
                    var left=300;
                    var dx = Math.random() * 40 - 20;
                    var dy = Math.random() * 40 - 20;
                    setInterval(function () {
                        if (top > $(".search").height() - binding.value || top < 0) {
                                  dx = -dx
                              }
                              if (left > $(".search").width() - binding.value || left < 0) {
                                  dy = -dy
                              }
                              top += dx;
                              left += dy;
                       $(el).css({ "top": top + "px", "left": left + "px" })
     }, 100)
                }

               
            }
        })

}
