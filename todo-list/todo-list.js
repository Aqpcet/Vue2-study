var app=new Vue({
        el:"#todoapp",

        data:{
          list:["coding","eating","sleeping"],
          inputValue:"",
        },

        methods:{
          add:function(){
            if(""!=this.inputValue){
              this.list.push(this.inputValue);
            }else{
              alert("任务不能为空！")
            }
          },

          remove:function(index){
            this.list.splice(index,1);
          },

          clear:function(){
            this.list=[];
          }
        }
    })