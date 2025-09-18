import FirstDiv from './FirstLayout/FirstDiv.jsx'
import SecondDiv from './SecondLayout/SecondDiv.jsx'
import Sale from './sale/Sale.jsx'
import Slider from './Slider/Slider.jsx'
import About from './contectUs/About.jsx'
import Rent from './rent/Rent.jsx'

export default function Home() {

    return (
        <div>
            <FirstDiv />
            <SecondDiv />
            <Sale />
            <Rent />
            <Slider />
            <About />
        </div>
    )
}