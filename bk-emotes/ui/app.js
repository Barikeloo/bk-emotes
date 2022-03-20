var app = new Vue({
  el: "#app",
  data: {
    opened: false,
    list: null, 
    tempList: null, 
  },
  methods: {
    setTempList: function(type){
      for(let i = 0; i <= app.list.length; i++){
        if(app.list[i].label == type){
          this.tempList = app.list[i].sub 
        }
      }
    }, 
    makeAnimation: function(anim){
      $.post('https://bk-emotes/execute', JSON.stringify({ anim }))
      $.post('https://bk-emotes/exit', JSON.stringify({}));
      app.opened = false
    }
  }, 
  mounted() {
    window.addEventListener('message', function (event) {
      if (event.data.action == 'open') {
        app.opened = true 
        app.list = event.data.list 
        app.tempList = event.data.list[0].sub 
      }
    })
    document.onkeyup = function (data) {
      if (data.which == 27) {
          $.post('https://bk-emotes/exit', JSON.stringify({}));
          app.opened = false
          return
      }
    };
  }
})