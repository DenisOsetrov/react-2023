export default function ApiService (endpoint) {

    //цей метод передає всю інформацію про об'єкти
    this.getAllData = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json());

    // цей метод передає всю інформацію про один об'єкт
    this.getSingleData = (id) => fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        .then(value => value.json());
}
