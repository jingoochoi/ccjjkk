import { Component } from "react";
import axios from 'axios'
import '../../css/weather.css'
class Weather extends Component{
    constructor(p){
        super(p)
        this.state={temp:'',desc:'',icon:'',load:true,citi:''}
    }
    componentDidMount(){
        const city='seongnam'
        const keys='a0b75def9203ad25b02cc52c590183b4'
        const urls=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys}`
        // https://openweathermap.org/
        // fetch(urls).then(a=>a.json()).then(b=>{
        //     // console.log(b)
        //     this.setState({
        //         temp:b.main.temp,
        //         desc:b.weather[0].description,
        //         icon:b.weather[0].icon,
        //         load:false,
        //         citi:city
        //     })
        // }).catch(e=>alert(e))
        axios.get(urls).then(a=>{
            const data=a.data
            // console.log(a)
            this.setState({
                temp:data.main.temp,
                desc:data.weather[0].description,
                icon:data.weather[0].icon,
                load:false,
                citi:city,
            })
        }).catch(e=>alert(e))
    }
    render(){
        const icom=`http://openweathermap.com/img/w/${this.state.icon}.png`
        if (this.state.load) {
            return <h4>loading...</h4>
        }else{
            return(
                <div className="weather-bx">
                    <h4>now weather</h4>
                    <img src={icom} alt="icon" />
                    <p>{this.state.citi}</p>
                    <p>{(this.state.temp-273.15).toFixed(1)}℃</p>
                    {/* toFixed=소수점 아래자리의 숫자 정하기 */}
                    <p>{this.state.desc}</p>
                </div>
            )
        }
    }
}
export default Weather