import axios from "axios";

export const getPost = (page) => async (dispatch) => {
    const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );

    dispatch({
        type: "GET_POSTS", //chama os dados
        payload: res.data, //recebe aqui os dados
    });
}