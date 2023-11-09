

const Magnetic = new (function() {
    const countryColors =  [
      "#FF6666", // Red with hint of gray
       "#66FF66", // Green with hint of gray
       "#6666FF", // Blue with hint of gray
       "#CCCC66", // Yellow with hint of gray
       "#CC66CC", // Magenta with hint of gray
       "#66CCCC", // Cyan with hint of gray
       "#FF8533", // Orange with hint of gray
       "#339933", // Dark Green with hint of gray
       "#996699"  // Purple with hint of gray
];
    function z(a) {
        var b = new Magnet;
        b.position.x = a.x;
        b.position.y = a.y;
        f.push(b);
        a = b.position;
        //console.log(F);
        for (b = 0; b < 80; b++) {
            var c = new Particle;
            c.position.x = a.x;
            c.position.y = a.y;
            c.shift.x = a.x;
            c.shift.y = a.y;
            c.color = k[g].particleFill;
            q.push(c)
        }
        for (b = 0; b < countries.length; b++) {
            var c = new Emitter;
            c.name = countries[b]
            c.position.x = a.x;
            c.position.y = a.y;
            //console.log(a);
            c.shift.x = a.x//+(b*10);
            c.shift.y = a.y//+(b*10);
            c.variance = 0//(b+1)/400
            c.rotation.x = 0.5
            c.rotation.y = 0.5
            c.color = countryColors[b]
            qu.push(c)
        }
    }
    function G(a) {
        n = a.clientX - (window.innerWidth - i) * 0.5;
        o = a.clientY - (window.innerHeight - j) * 0.5
    }
    function H(a) {

        a.preventDefault();
        //A(1)
    }
    function color(){
      var index = Math.floor(Math.random()*9)
      if(index<1)
        return "#FF0000"
      else if (index<3)
        return "#00FF00"
      else
        return "#0000FF"
    }
    function A() {
      //console.log(qu);
        //var index = 1//Math.floor(Math.random()*qu.length)

        //console.log(index);
        var a = qu[index]//emitter
        //console.log(a);
        //console.log(a);
        w = true;
        let magnet = f[0]
        //console.log();
        for (var index =0; index<qu.length;index++)
        {


          var value = ((json[year.toFixed(0)][countries[index]]['C']/1000000000)+1).toFixed(0)
        }


        var index = Math.floor(Math.random()*qu.length)
        //console.log(value);
        //console.log(index);
        var a = qu[index]//emitter
        if(a){

            if ((new Date).getTime() - x < 300) {
              var c = new Particle;
              c.position.x = a.position.x;
              c.position.y =a.position.y;
              //console.log(magnet);
              c.shift.x = a.position.x;
              c.shift.y = a.position.y;
              c.color = k[0].particleFill;
              //console.log(c);
              q.push(c)
              //console.log('1');
            }

        }

        x = (new Date).getTime();
        for (var a = 0, b = f.length; a < b; a++) {
            let magnet = f[a];
            if (B(magnet.position, {
                x: n,
                y: o
            }) < magnet.orbit * 0.5) {
                //magnet.dragging = true;
                break
            }
        }

    }
    function I() {
        w = false;
        for (var a = 0, b = f.length; a < b; a++) {
            let magnet = f[a];
            magnet.dragging = false
        }
    }

    function K(a) {
        if (a.touches.length == 1) {
            a.preventDefault();
            n = a.touches[0].pageX - (window.innerWidth - i) * 0.5;
            o = a.touches[0].pageY - (window.innerHeight - j) * 0.5;
            A()
        }
    }
    function L(a) {
        if (a.touches.length == 1) {
            a.preventDefault();
            n = a.touches[0].pageX - (window.innerWidth - i) * 0.5;
            o = a.touches[0].pageY - (window.innerHeight - j) * 0.5
        }
    }
    function M() {
        w = false;
        for (var a = 0, b = f.length; a < b; a++) {
            magnet = f[a];
            magnet.dragging = false
        }
    }
    function N(a) {
        a.preventDefault();

    }
    function O(a) {
        a.preventDefault();

    }

    function C() {
        i = r ? window.innerWidth : 800;
        j = r ? window.innerHeight : 550;
        e.width = i;
        e.height = j;
        var a = (window.innerWidth - i) * 0.5
          , b = (window.innerHeight - j) * 0.5;
        e.style.position = "absolute";
        e.style.left = a + "px";
        e.style.top = b + "px";
        if(t){
          t.style.position = "absolute";
          t.style.left = a + "px";
          t.style.top = b - 20 + "px"
        }
        else{
          console.log(t);
        }

    }

    function filterValue(obj, key, value) {

      //console.log(qu[1],obj[key],key,value);
      //console.log(obj.find(function(v){console.log(v); return v[key] == value}));
      //console.log(obj);
      return obj.find(function(v){ return v[key] == value});
    }
    const rainbowColors = ["#9400D3",
    "#4B0082",
    "#0000FF",
    "#00FF00",
    "#FFFF00",
    "#FF7F00",
    "#FF0000",];

    function interpolateColor(color1, color2, factor) {
      const r1 = parseInt(color1.slice(1, 3), 16);
      const g1 = parseInt(color1.slice(3, 5), 16);
      const b1 = parseInt(color1.slice(5, 7), 16);

      const r2 = parseInt(color2.slice(1, 3), 16);
      const g2 = parseInt(color2.slice(3, 5), 16);
      const b2 = parseInt(color2.slice(5, 7), 16);

      const r = Math.round(r1 + factor * (r2 - r1));
      const g = Math.round(g1 + factor * (g2 - g1));
      const b = Math.round(b1 + factor * (b2 - b1));
      const a = 0.3
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }


    function changeColor() {
      const currentIndex = Math.floor(year) % 7
      const currentColor = rainbowColors[currentIndex];
      const nextColor = rainbowColors[(currentIndex + 1) % rainbowColors.length];

      const yearFraction = year - Math.floor(year);
      const color = interpolateColor(currentColor, nextColor, yearFraction);

      return color


    }
    function P() {




          if (year<2021)
          {
            year += 0.033; // Increment by 1/30th every time
            const rangeElement = document.querySelector('.range');
            const year_label = document.getElementById('year_label')
            //const newValue = 50;
            const currentPValue = getComputedStyle(rangeElement).getPropertyValue('--p');
            const value = ((year.toFixed(0)-1900)/(2020-1900)*100)
            const currValue = value.toFixed(0);
            const smallValue = value.toFixed(20);



            if(currValue!=currentPValue){

              rangeElement.style.setProperty('--p', currValue.toString());
              const txt = document.createTextNode(year_label);
              year_label.innerHTML= year.toFixed(0);
              //A()
              //console.log(json[year.toFixed(0)][0]['C']);
            }
            else if(smallValue!=smallPvalue){
              smallPvalue =smallValue
              //A()
            }

            A()
            //for (var i = 0; i<countries.length;i++){
              //const i = 2;
              //console.log(json[year.toFixed(0)][countries[i]]['C']/10000000000);

            //}

            //console.log(filterValue(qu,"name","Africa"));

          }





      //console.log('hit');
        if (k[g].useFade) {
            d.fillStyle = k[g].fadeFill;
            d.fillRect(0, 0, d.canvas.width, d.canvas.height)
        } else
            d.clearRect(0, 0, e.width, e.height);
        var a, b, c, h, D, cu, u;
        a = -1;
        h = 0;
        for (u = f.length; h < u; h++) {
            b = f[h];
            if (b.dragging) {
                b.position.x += (n - b.position.x) * 0.2;
                b.position.y += (o - b.position.y) * 0.2
            } else if (b.position.x < 0 || b.position.y < 0 || b.position.x > i || b.position.y > j)
                a = h;
            b.size += (b.connections / 100 - b.size+20) * 0.05;
            b.size = Math.max(b.size, 2);
            c = d.createRadialGradient(b.position.x, b.position.y, 0, b.position.x, b.position.y, b.size * 10);

            const color = changeColor()

            c.addColorStop(0, color);
            c.addColorStop(1, k[g].glowB);
            d.beginPath();
            d.fillStyle = c;
            d.arc(b.position.x, b.position.y, b.size * 10, 0, Math.PI * 2, true);
            d.fill();
            d.beginPath();
            d.fillStyle = c;
            d.arc(b.position.x, b.position.y, b.size, 0, Math.PI * 2, true);
            d.fill();
            b.connections = 0
        }
        a != -1 && f.length > 1 && f.splice(a, 1);
        c = 0;
        for (D = q.length; c < D; c++) {
            a = q[c];
            var y = -1
              , E = -1
              , l = null
              , v = {
                x: 0,
                y: 0
            };
            h = 0;
            for (u = f.length; h < u; h++) {
                b = f[h];
                y = B(a.position, b.position) - b.orbit * 0.5;
                if (a.magnet != b) {
                    var m = b.position.x - a.position.x;
                    if (m > -p && m < p)
                        v.x += m / p;
                    m = b.position.y - a.position.y;
                    if (m > -p && m < p)
                        v.y += m / p
                }
                if (l == null || y < E) {
                    E = y;
                    l = b
                }
            }
            if (a.magnet == null || a.magnet != l)
                a.magnet = l;
            l.connections += 1;
            a.angle += a.speed;
            a.shift.x += (l.position.x + v.x * 6 - a.shift.x) * a.speed/2;
            a.shift.y += (l.position.y + v.y * 6 - a.shift.y) * a.speed;
            a.position.x = a.shift.x + Math.cos(c + a.angle) * a.orbit * a.force;
            a.position.y = a.shift.y + Math.sin(c + a.angle) * a.orbit * a.force;
            a.position.x = Math.max(Math.min(a.position.x, i - a.size / 2), a.size );
            a.position.y = Math.max(Math.min(a.position.y, j - a.size / 2), a.size );
            a.orbit += (l.orbit*1 - a.orbit*0.75) * 0.005;
            //console.log(d);
            d.beginPath();
            d.fillStyle = a.color;
            d.arc(a.position.x, a.position.y, a.size / 2, 0, Math.PI * 2, true);
            d.fill()
        }
        cu = 0;
        for (D = qu.length; cu < D; cu++) {
            a = qu[cu];
            var y = -1
              , E = -1
              , l = null
              , v = {
                x: 0,
                y: 0
            };
            h = 0;
            for (u = f.length; h < u; h++) {
                b = f[h];
                y = B(a.position, b.position) - b.orbit * 0.5;
                if (a.magnet != b) {
                    var m = b.position.x - a.position.x;
                    if (m > -p && m < p)
                        v.x += m / p;
                    m = b.position.y - a.position.y;
                    if (m > -p && m < p)
                        v.y += m / p
                }
                if (l == null || y < E) {
                    E = y;
                    l = b
                }
            }
            if (a.magnet == null || a.magnet != l)
                a.magnet = l;
            l.connections += 1;

            a.angle += a.speed//+(a.variance);

            //console.log(a.angle);
            //console.log(a.angle);
            a.shift.x += (l.position.x + v.x * 0.1 - a.shift.x) * a.speed;
            a.shift.y += (l.position.y + v.y * 0.1 - a.shift.y) * a.speed;
            //console.log((l.position.x + v.x * 6 - a.shift.x) * a.speed);
            a.position.x = a.shift.x + Math.cos(cu + a.angle) * a.orbit *1.2 * a.force;
            a.position.y = a.shift.y + Math.sin(cu + a.angle) * a.orbit *1.2* a.force;
            a.position.x = Math.max(Math.min(a.position.x, (i - a.size / 2)), a.size / 2);
            a.position.y = Math.max(Math.min(a.position.y, j - a.size / 2), a.size / 2);

            // Calculate the rotation transformation for the triangle
            var rotationAngle = cu+1 + a.angle;
            const scale = 5;
            // Save the canvas state
            d.save();

            // Apply the rotation transformation to the canvas context
            d.translate(a.position.x, a.position.y);
            d.rotate(rotationAngle);

            // Draw the object (rotated triangle) at its original position
            //d.beginPath();
            d.fillStyle = a.color;
            var pathData = "M " + (1 * scale) + " " + (-1 * scale) + " C " + (3 * scale) + " " + (1 * scale) + " " + (2 * scale) + " " + (1 * scale) + " " + (3 * scale) + " " + (1 * scale) + " C " + (4 * scale) + " " + (1 * scale) + " " + (4 * scale) + " " + (2 * scale) + " " + (2 * scale) + " " + (4 * scale) + " A " + (5 * scale) + " " + (5 * scale) + " 0 0 0 " + (0 * scale) + " " + (0 * scale) + " A " + (5 * scale) + " " + (5 * scale) + " 90 0 0 " + (-4 * scale) + " " + (-1 * scale) + " C " + (-2 * scale) + " " + (-4 * scale) + " " + (-1 * scale) + " " + (-4 * scale) + " " + (-1 * scale) + " " + (-3 * scale) + " C " + (-1 * scale) + " " + (-2 * scale) + " " + (-1 * scale) + " " + (-3 * scale) + " " + (1 * scale) + " " + (-1 * scale);

            var path = new Path2D(pathData);

            d.fill(path);

            // Restore the canvas state to the original
            d.restore();

        }
    }
    function B(a, b) {
        var c = b.x - a.x
          , h = b.y - a.y;
        return Math.sqrt(c * c + h * h)
    }
    var r = navigator.userAgent.toLowerCase().indexOf("android") != -1 ||
              navigator.userAgent.toLowerCase().indexOf("iphone") != -1 ||
              navigator.userAgent.toLowerCase().indexOf("ipad") != -1, i = r ? window.innerWidth : 800, j = r ? window.innerHeight : 550, F = 20, p = 300, e, d, t,nextYear,json,countries,smallPvalue, q = [], qu = [], f = [], year, n = window.innerWidth - i, o = window.innerHeight - j, w = false, x = 0, g = 0, k = [{
        glowA: "rgba(233,143,154,0.3)",
        glowB: "rgba(0,143,154,0.0)",
        particleFill: "#ffffff",
        fadeFill: "rgba(22,22,22,.6)",
        useFade: false
    }, {
        glowA: "rgba(0,200,250,0.3)",
        glowB: "rgba(0,200,250,0.0)",
        particleFill: "#ffffff",
        fadeFill: "rgba(22,22,22,.6)",
        useFade: true
    }, {
        glowA: "rgba(230,0,0,0.3)",
        glowB: "rgba(230,0,0,0.0)",
        particleFill: "#ffffff",
        fadeFill: "rgba(11,11,11,.6)",
        useFade: true
    }, {
        glowA: "rgba(0,230,0,0.3)",
        glowB: "rgba(0,230,0,0.0)",
        particleFill: "rgba(0,230,0,0.7)",
        fadeFill: "rgba(22,22,22,.6)",
        useFade: true
    }, {
        glowA: "rgba(0,0,0,0.3)",
        glowB: "rgba(0,0,0,0.0)",
        particleFill: "#333333",
        fadeFill: "rgba(255,255,255,.6)",
        useFade: true
    }, {
        glowA: "rgba(0,0,0,0.0)",
        glowB: "rgba(0,0,0,0.0)",
        particleFill: "#333333",
        fadeFill: "rgba(255,255,255,.2)",
        glowB: "rgba(230,230,230,0.0)",
        particleFill: "#ffffff",
        fadeFill: "",
        useFade: false
    }];
    this.init = function() {
        countries = ["Africa","Asia (excl. China and India)","China","Europe","India","North America (excl. USA)","Oceania","South America","United States"]
        e = document.getElementById("world");
        t = document.getElementById("seeMore");
        if (e && e.getContext) {
            d = e.getContext("2d");
            if (r)
                e.style.border = "none";
            document.addEventListener("mousemove", G, false);
            e.addEventListener("mousedown", H, false);
            document.addEventListener("mouseup", I, false);

            window.addEventListener("resize", C, false);
            e.addEventListener("touchstart", K, false);
            document.addEventListener("touchmove", L, false);
            document.addEventListener("touchend", M, false);
            // document.getElementById("keyboardLeft").addEventListener("click", N, false);
            // document.getElementById("keyboardRight").addEventListener("click", O, false);
            year = 1900

            fetch('./private/updated.json')
              .then((response) => response.json())
              .then((data) => {json = data;console.log(data)});


            z({
                x: (i - 300) * 0.5 + Math.random() * 300,
                y: (j - 300) * 0.5 + Math.random() * 300
            });
            C();
            setInterval(P, 1E3 / 120)
        }
    }
}
);
function Particle() {
    this.size = 0.5 + Math.random() * 3.5;
    this.position = {
        x: 0,
        y: 0
    };
    this.shift = {
        x: 0,
        y: 0
    };
    this.angle = 0;
    this.speed = 0.01 + this.size / 4 * 0.03;
    this.force = 1 - Math.random() * 0.11;
    this.color = "#ffffff";
    this.orbit = 1;
    this.magnet = null
}
function Emitter() {
    this.size = 10;
    this.position = {
        x: 0,
        y: 0
    };
    this.shift = {
        x: 0,
        y: 0
    };
    this.angle = 0;
    this.speed = 0.01;
    this.rotation = {
        x: 0,
        y: 0
    };
    this.variance = 0.5
    this.force = 1 - Math.random() * 0.11;
    this.color = "#ff0000";
    this.orbit = 200;
    this.magnet = null
}
function Magnet() {
    this.orbit = 100;
    this.position = {
        x: 0,
        y: 0
    };
    this.dragging = false;
    this.connections = 0;
    this.size = 1
}
Magnetic.init();
