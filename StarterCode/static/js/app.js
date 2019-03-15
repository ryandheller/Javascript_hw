
var tableData = data;

function date_enter(lookHere) {
    let tBody = d3.select('tbody')
    tBody.selectAll("tr").remove()
    idk = lookHere
    idk.map(x => {
    let newTr = tBody.append('tr')
    Object.values(x).forEach(y => {
        newTr.append('td').text(y)
    })
})}

function initial_table() {
    let tBody = d3.select('tbody')
    tableData.map(x => {
    let newTr = tBody.append('tr')
    Object.values(x).forEach(y => {
        newTr.append('td').text(y)
    })
})}

initial_table()

let datetime = d3.select('#filter-btn').on('click', function(e) {
    d3.event.preventDefault();
    console.log('buttonnnn')
    let practice = d3.select('#datetime').node().value
    let practices = d3.select('#city').node().value
    let practriced = d3.select('#state').node().value
    let country = d3.select('#country').node().value
    let shape = d3.select('#shape').node().value
    console.log(practice.length, practices.length, practriced.length, country.length, shape.length)
    var whoCares = data
    if (practice.length != 0 ){
        whoCares = whoCares.filter(x => {return x.datetime == practice})}
    if (practices.length != 0 ){
            whoCares = whoCares.filter(x => {return x.city == practices})}
    if (practriced.length != 0){
        whoCares = whoCares.filter(x => {return x.state == practriced})
    }
    if (country.length != 0){
        whoCares = whoCares.filter(x => {return x.country == country})
    }
    if (shape.length != 0){
        whoCares = whoCares.filter(x => {return x.shape == shape})
    }
    console.log(whoCares)
    date_enter(whoCares)
})


