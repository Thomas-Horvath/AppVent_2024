class HomeView {
    showData(data) {
        document.querySelector('main section').innerHTML = `<h1>${data.title}</h1><p>${data.text}</p>`
    }
}

export default HomeView;