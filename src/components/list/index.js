import React from "react";
import { ListWrapper, ListItem, List } from "./style";

function RecommendList(props) {
    return (
        <ListWrapper>
            <h1 className="title">推荐歌单</h1>
            <List>
                {
                    props.recommendList.map(item=>{
                        
                    })
                }
            </List>
        </ListWrapper>
    );
}
export default React.memo(RecommendList);
