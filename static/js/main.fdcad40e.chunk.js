(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/weather20.1f65df40.jpg"},12:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=a(7),s=a(6),l=a.n(s),m=a(1),p=a(2),h=a(4),u=a(3),d=a(5),w=(a(18),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("div",{className:"row py-3 pt-5 mx-md-0 mx-5"},r.a.createElement("div",{className:" col-md-3 offset-md-2 "},r.a.createElement("input",{type:"text",className:"form-control",id:"form",placeholder:"city ex: london",name:"city2",onChange:this.props.onChangeCity})),r.a.createElement("div",{className:" col-md-3 mt-md-0 mt-2 "},r.a.createElement("input",{type:"text",className:"form-control ",id:"form",placeholder:"country ex: uk",name:"country",onChange:this.props.onChangeCountry})),r.a.createElement("div",{className:"col-md-3  mt-md-0 mt-3 text-md-left text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-danger ",id:"btn-lg"},"get weather"))),this.props.error?r.a.createElement("div",{className:"alert alert-danger text-center mx-5 mb-0 py-1"},"please enter a valid data"):null)))}}]),t}(r.a.Component)),y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.loadweather(this.props.lat,this.props.lon)}},{key:"render",value:function(){var e,t;return r.a.createElement("div",null,r.a.createElement("div",{className:"container py-4 text-center px-0",style:{position:"relative",maxWidth:"70%"}},r.a.createElement("div",{className:"card py-4 mx-0 px-3 mx-md-5",id:"card"},r.a.createElement("h2",{className:"pt-4"}," ",this.props.city),r.a.createElement("i",{className:this.props.icon+" display-1 py-4"}),r.a.createElement("h3",{className:"py-3 "},this.props.main),r.a.createElement("h3",null,this.props.celsuis,"\xb0"),(e=this.props.temp_max,t=this.props.temp_min,r.a.createElement("h3",{className:"py-4 "},r.a.createElement("span",{className:"mx-3"},e,"\xb0"),r.a.createElement("span",{className:" mx-3 "},t,"\xb0"))),r.a.createElement("h3",{className:"mb-5"},this.props.description))))}}]),t}(r.a.Component),b=a(10),v=a.n(b),f=(a(19),a(20),a(11)),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={city:void 0,country:void 0,icon:"",main:"",description:"",temp_max:void 0,temp_min:void 0,celsuis:void 0,let:void 0,lon:void 0,error:!1},a.weatherIcon={Thunderstorm:"wi wi-thunderstorm",Drizzle:"wi wi-sleet",Rain:"wi wi-storm-showers",Snow:"wi wi-snow",Atmosphere:"wi wi-fog",Clear:"wi wi-day-sunny",Clouds:"wi wi-day-fog"},a.getWeather=function(e,t){var n,r,o,i,c,s,m;return l.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return n=a.state.city2,r=a.state.country,o="6d0fec3c5fc17973eaea1228813668c1",i=n&&r?"https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&appid=").concat(o):"https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(o),p.prev=4,p.next=7,l.a.awrap(fetch(i));case 7:return c=p.sent,p.next=10,l.a.awrap(c.json());case 10:s=p.sent,m=s.weather[0].id,a.weatherIconSwitch(m),a.setState({city:s.name,main:s.weather[0].main,description:s.weather[0].description,temp_max:a.cal(s.main.temp_max),temp_min:a.cal(s.main.temp_min),celsuis:a.cal(s.main.temp),error:!1}),p.next=19;break;case 16:p.prev=16,p.t0=p.catch(4),a.setState({error:"data error"});case 19:case"end":return p.stop()}}),null,null,[[4,16]])},a.cal=function(e){return Math.floor(e-273.15)},a.weatherIconSwitch=function(e){switch(!0){case e>=200&&e<=232:a.setState({icon:a.weatherIcon.Thunderstorm});break;case e>=300&&e<=321:a.setState({icon:a.weatherIcon.Drizzle});break;case e>=500&&e<=531:a.setState({icon:a.weatherIcon.Rain});break;case e>=600&&e<=622:a.setState({icon:a.weatherIcon.Snow});break;case e>=701&&e<=781:a.setState({icon:a.weatherIcon.Atmosphere});break;case 800===e:a.setState({icon:a.weatherIcon.Clear});break;case e>=801&&e<=804:a.setState({icon:a.weatherIcon.Clouds})}},a.onChangeCity=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.onChangeCountry=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.getWeather()},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("img",{src:v.a,alt:"img",className:"img"}),r.a.createElement(w,{onChangeCity:this.onChangeCity,onChangeCountry:this.onChangeCountry,onSubmit:this.onSubmit,error:this.state.error}),r.a.createElement(y,{loadweather:this.getWeather,lat:this.props.coords.latitude,lon:this.props.coords.longitude,city:this.state.city,icon:this.state.icon,main:this.state.main,celsuis:this.state.celsuis,description:this.state.description,temp_max:this.state.temp_max,temp_min:this.state.temp_min}))):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",null,"Geolocation is not Enabled"):r.a.createElement("div",null,"your browser doesn't support geolocation")}}]),t}(r.a.Component),E=Object(f.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.fdcad40e.chunk.js.map