(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{20:function(e,t,a){e.exports=a(48)},25:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),s=a.n(c),o=(a(25),a(6)),i=a.n(o),l=a(19),m=a(2),p=a(3),d=a(5),u=a(4),h=(a(27),a(28),a(29),a(7)),v=a.n(h);var y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.covidUpdateByCountry;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"Card"},n.a.createElement("h1",{className:"py-3"},this.props.city),n.a.createElement("h5",{className:"py-4"},n.a.createElement("i",{className:"wi ".concat(this.props.weathericon," display-1")})),this.props.temp_celsius?n.a.createElement("h1",{className:"py-2"},this.props.temp_celsius,"\u2103"):null,function(e,t){if(e&&t)return n.a.createElement("div",null,n.a.createElement("h5",null,n.a.createElement("span",{className:"px-4"},"MIN"),n.a.createElement("span",{className:"px-4"},"MAX")),n.a.createElement("h3",null,n.a.createElement("span",{className:"px-4"},e,"\u2103"),n.a.createElement("span",{className:"px-4"},t,"\u2103")))}(this.props.temp_min,this.props.temp_max),n.a.createElement("h4",{className:"py-4"},this.props.description.charAt(0).toUpperCase()+this.props.description.slice(1)))),n.a.createElement("div",{className:"col-md-3 mt-4 "},this.props.country?n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("img",{src:v.a,className:"card-img-top ",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},n.a.createElement("strong",null,e.Country," Stats")),n.a.createElement("h5",{className:"alert alert-danger"},"Active cases: ",e.Active),n.a.createElement("p",{className:"card-text"},"Total Confirmed: ",e.Confirmed,n.a.createElement("br",null),"Total Recovered: ",e.Recovered,n.a.createElement("br",null),"Total Deaths: ",e.Deaths))):n.a.createElement("div",{className:"card",style:{width:"18rem"}},n.a.createElement("img",{src:v.a,className:"card-img-top ",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},n.a.createElement("strong",null,"World Stats")),n.a.createElement("h5",{className:"alert alert-danger"},"Last 24 hours : ",this.props.covid.NewConfirmed),n.a.createElement("p",{className:"card-text"},"Total Confirmed: ",this.props.covid.TotalConfirmed,n.a.createElement("br",null),"Total Recovered: ",this.props.covid.TotalRecovered,n.a.createElement("br",null),"Total Deaths: ",this.props.covid.TotalDeaths))))))}}]),a}(n.a.Component),f=(a(30),function(e){return n.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country")}),E=function(e){return n.a.createElement("div",{className:"container h-100"},n.a.createElement("form",{onSubmit:e.loadWeather},n.a.createElement("div",null,e.error?f():""),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3 offset-md-2 py-2 "},n.a.createElement("input",{type:"text",className:"form-control",name:"city",placeholder:"City",autoComplete:"off"})),n.a.createElement("div",{className:"col-md-3 py-2"},n.a.createElement("input",{type:"text",className:"form-control",name:"country",placeholder:"Country",autoComplete:"off"})),n.a.createElement("div",{className:"col-md-3 mt-md-0 text-md-left py-2"},n.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))},w=a(8),N=a.n(w),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getWeather=function(){var t=Object(l.a)(i.a.mark((function t(a){var r,n,c,s,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=a.target,n=a.target.elements.city.value,c=a.target.elements.country.value,!n||!c){t.next=16;break}return t.next=7,fetch("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(c,"&appid=").concat("3dc2e5341d47c3ee10eb2daffd3999a8"));case 7:return s=t.sent,t.next=10,s.json();case 10:o=t.sent,e.setState({city:"".concat(o.name,",").concat(o.sys.country),country:o.sys.country,celsius:e.calCelsius(o.main.temp),temp_max:e.calcCelsius(o.main.temp_max),temp_min:e.calcCelsius(o.main.temp_min),description:o.weather[0].description,error:!1}),e.getWeatherIcon(e.weatherIcon,o.weather[0].id),e.getCovid(),t.next=17;break;case 16:e.setState({error:!0});case 17:r[0].value="",r[1].value="";case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,country:void 0,icon:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1,covid:{},covidUpdateByCountry:{}},e.weatherIcon={Thuderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(p.a)(a,[{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"calcCelsius",value:function(e){return(e-273.15).toFixed(1)}},{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:e.Thuderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=531:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:default:this.setState({icon:e.Clouds})}}},{key:"componentDidMount",value:function(){var e=this;N.a.get("https://api.covid19api.com/summary").then((function(t){e.setState({covid:t.data.Global})}))}},{key:"getCovid",value:function(){var e=this;N.a.get("https://api.covid19api.com/dayone/country/".concat(this.state.country)).then((function(t){e.setState({covidUpdateByCountry:t.data[t.data.length-1]})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,{loadWeather:this.getWeather,error:this.state.error}),n.a.createElement(y,{city:this.state.city,country:this.state.country,temp_celsius:this.state.celsius,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weathericon:this.state.icon,covid:this.state.covid,covidUpdateByCountry:this.state.covidUpdateByCountry}))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/cov1.453135b2.jpg"}},[[20,1,2]]]);
//# sourceMappingURL=main.1c51654b.chunk.js.map