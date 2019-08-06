const div = document.createElement('div')
div.style.position = 'fixed'
div.style.bottom = '0'
div.style.right = '0'
document.body.appendChild(div)

export const fpsControl = (fps, isShowFPS, cb) => {
  var stop = false
  var frameCount = 0
  var fps, fpsInterval, startTime, now, then, elapsed, fpsStep

  function startAnimating(fps) {
    fpsInterval = 1000 / fps
    then = Date.now()
    startTime = then
    fpsStep = 0
    animate()
  }


  function animate() {
    if (stop) {
      return
    }

    requestAnimationFrame(animate)

    // calc elapsed time since last loop

    now = Date.now()
    elapsed = now - then

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

      // Get ready for next frame by setting then=now, but...
      // Also, adjust for fpsInterval not being multiple of 16.67
      then = now - (elapsed % fpsInterval)

      // var sinceStart = now - startTime
      // var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100
      
      fpsStep += 1

      if (fpsStep >= fps) {
        fpsStep = 0
      }

      if (isShowFPS === true) {
        var sinceStart = now - startTime
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100
        div.textContent = currentFps
      }

      cb(fpsStep)
    }
  }

  return {
    stop: () => { stop = true },
    continue: () => { stop = false },
    start: () => { startAnimating(fps) },
  }
}
