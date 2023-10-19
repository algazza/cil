// setinterval biar terjadi realtime/gosah refres refres
setInterval(()=>{
    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    let sec_dot = document.querySelector('.sec_dot')
    let min_dot = document.querySelector('.min_dot')
    let hr_dot = document.querySelector('.hr_dot')

    let hr = document.getElementById('hr')
    let mn = document.getElementById('mn')
    let sc = document.getElementById('sc')

    //mintain waktu realtime
    let h = new Date() .getHours()
    let m = new Date() .getMinutes()
    let s = new Date() .getSeconds()

    //garisnya biar gerak
    hh.style.strokeDashoffset = 510 - (510 * h) / 12
    // 12 jam 
    mm.style.strokeDashoffset = 630 - (630 * m) / 60
    // 60 menit
    ss.style.strokeDashoffset = 760 - (760 * s) / 60
    // 60 detik

    //titiknya bisa ngikutin pucuk garis
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`
    // 360 / 60 detik = 6
    min_dot.style.transform = `rotateZ(${m * 6}deg)`
    // 360 / 60 menit = 6
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`
    // 360 / 12 jam = 30

    hr.style.transform = `rotateZ(${h * 30}deg)`
    mn.style.transform = `rotateZ(${m * 6}deg)`
    sc.style.transform = `rotateZ(${s * 6}deg)`
})

