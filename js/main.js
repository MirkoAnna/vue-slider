const vue = new Vue (
    {
        el: '#app',
        data: {
            active: 0,
            interval: null,

            items: [
                {
                    url:'img/01.jpg',
                    name:'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url:'img/02.jpg',
                    name:'Svizzera',
                    text:'Lorem ipsum'
                },
                {
                    url:'img/03.jpg',
                    name:'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url:'img/04.jpg',
                    name:'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    url:'img/05.jpg',
                    name:'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ],
        },
        methods: {
            previous() {
                if(this.active <= 0) {
                    this.active = this.items.length - 1;
                } else {
                    this.active--;
                }
            },
            following() {  
                if (this.active >= this.items.length - 1) {
                this.active = 0;
                } else {
                    this.active++;
                }
            },
            clickSelect(indice) {
                this.active = indice;
            },
            autoPlay() {
                this.interval = setInterval(() => {
                    this.following();
                }, 3000);
            },
            stopPlay() {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
    }
)