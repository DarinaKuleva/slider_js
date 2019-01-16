const Feedback = [
    {
        Url_photo: 'img/1.jpg',
        Name: 'Петя',
        Сomment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        Score: 1
    },
    {
        Url_photo: 'img/2.jpg',
        Name: 'Ваня',
        Сomment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        Score: 2
    },
    {
        Url_photo: 'img/3.jpg',
        Name: 'Катя',
        Сomment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        Score: 3
    },
    {
        Url_photo: 'img/4.jpg',
        Name: 'Саша',
        Сomment: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
        Score: 3
    },
    {
        Url_photo: 'img/5.jpg',
        Name: 'Дима',
        Сomment: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.',
        Score: 5
    }
];

let CountLeft = 0;
let CountCenter = 1;
let CountRight = 2;
const SliderLength = 5;

let Slider = {
    SetLeft: function(image) {
       document.getElementById("imgLeft").style.backgroundImage = "url("+image+")";
       document.getElementById("nameLeft").innerHTML=Feedback[CountLeft].Name;
       document.getElementById("commentLeft").innerHTML=Feedback[CountLeft].Сomment;


       if ($("#scoreLeft").length > 0)
       {
            $("#scoreLeft").empty();
       }

       for (let i = 0; i < Feedback[CountLeft].Score; i++)
       {
           let StarString = '<img id="star" src="img/star.svg">';
           $("#scoreLeft").append(StarString);
       }
    },

    SetCenter: function(image) {
       document.getElementById("imgCenter").style.backgroundImage = "url("+image+")";
       document.getElementById("nameCenter").innerHTML=Feedback[CountCenter].Name;
       document.getElementById("commentCenter").innerHTML=Feedback[CountCenter].Сomment;

       if ($("#scoreCenter").length > 0)
       {
            $("#scoreCenter").empty();
       }

       for (let i = 0; i < Feedback[CountCenter].Score; i++)
       {
           let StarString = '<img id="star" src="img/star.svg">';
           $("#scoreCenter").append(StarString);
       }
    },
    SetRight: function(image) {
        document.getElementById("imgRight").style.backgroundImage = "url("+image+")";
        document.getElementById("nameRight").innerHTML=Feedback[CountRight].Name;
        document.getElementById("commentRight").innerHTML=Feedback[CountRight].Сomment;

        if ($("#scoreRight").length > 0)
        {
            $("#scoreRight").empty();
        }

        for (let i = 0; i < Feedback[CountRight].Score; i++)
        {
            let StarString =
            '<img id="star" src="img/star.svg">';
            $("#scoreRight").append(StarString);
        }
    },

    Init: function() {
        this.SetLeft(`${Feedback[0].Url_photo}`);
        this.SetCenter(`${Feedback[1].Url_photo}`);
        this.SetRight(`${Feedback[2].Url_photo}`);
    },

    Left: function() {
        CountLeft--;
        CountCenter--;
        CountRight--;
        if(CountLeft < 0)
            CountLeft = SliderLength-1;
        if(CountCenter < 0)
            CountCenter = SliderLength-1;
        if(CountRight < 0)
            CountRight = SliderLength-1;
        this.SetLeft(`${Feedback[CountLeft].Url_photo}`);
        this.SetCenter(`${Feedback[CountCenter].Url_photo}`);
        this.SetRight(`${Feedback[CountRight].Url_photo}`);
    },

    Right: function() {
        CountLeft++;
        CountCenter++;
        CountRight++;
        if(CountLeft == SliderLength)
            CountLeft = 0;
        if(CountCenter == SliderLength)
            CountCenter = 0;
        if(CountRight == SliderLength)
            CountRight = 0;
        this.SetLeft(`${Feedback[CountLeft].Url_photo}`);
        this.SetCenter(`${Feedback[CountCenter].Url_photo}`);
        this.SetRight(`${Feedback[CountRight].Url_photo}`);
    }
};



window.onload = function() {
    Slider.Init();
    setInterval(function() {
        Slider.Right();
    },500000);
};


