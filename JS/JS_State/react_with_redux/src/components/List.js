import { useSelector }from "react-redux";


function List() {
    const postList = useSelector((getstore) => {
        return getstore.post;
    });

    console.log(postList, 'postlist')
    return (
        postList.map((obj, index) =>
        <li key={index}>{obj.id} {obj.title} </li>
        
        ));

}
export default List;