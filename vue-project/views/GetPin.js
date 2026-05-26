const app = {
  apiResponse: document.querySelector("#api-response"),
  Input: document.querySelector("#Input"),
  searchBtn: document.querySelector("#Btn"),
  AllBtn: document.querySelector("#AllBtn"),

  fetchData: async function(url) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      const data = await response.json()

      this.apiResponse.innerHTML = ""

      if (url.includes("All")) {
        const img = document.createElement("img")
        img.src = data.message
        img.className = "rounded-lg border-4 border-pink-300 shadow hover:scale-105 transition max-w-full"
        this.apiResponse.appendChild(img)
      } else {
        if (!data.message || data.message.length === 0) {
          this.apiResponse.textContent = "No images for search"
          return
        }

        data.message.forEach(imgUrl => {
          const img = document.createElement("img")
          img.src = imgUrl
    
          this.apiResponse.appendChild(img)
        })
      }

      return data
    } catch (err) {
      console.error(err)
      this.apiResponse.textContent = "error"
    }
  }
}

app.AllBtn.addEventListener("click", () => app.fetchData("https://dog.ceo/api/breeds/image/random"))
app.searchBtn.addEventListener("click", () => {
  const user = app.userInput.value.toLowerCase().trim()
  if (user === "") {
    app.apiResponse.textContent = "type here."
    return
  }
  app.fetchData(`https://dog.ceo/api/breed/${breed}/images`)
})

app.fetchData("https://dog.ceo/api/breeds/image/random")
