export default function Map() {

    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3147.6824675626754!2d145.1282742766448!3d-37.91448403980243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x6ad66ad657aee985%3A0x5045675218cddc0!2sClayton%20VIC!3m2!1d-37.914547899999995!2d145.127492!4m5!1s0x6ad66acbf64673b9%3A0xfaf9b169a587104!2sMonash%20University%20Clayton%20Campus%2C%20Wellington%20Road%2C%20Clayton%20VIC!3m2!1d-37.9142416!2d145.1346592!5e0!3m2!1sen!2sau!4v1690957084579!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    return (
        <>
            <h1 style={{ marginBottom: "20px" }}>Your order is on your way</h1>
            <div dangerouslySetInnerHTML={{ __html: iframe }}>

            </div>
        </>
    )
}