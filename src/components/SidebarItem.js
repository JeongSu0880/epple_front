import React from "react";

function SiderbarItem({menu}){
    return(
        <div className="sidebar-item">  // map을 활용하여 SiderItem이라는 각 컴포넌트들 선언, menu라는 props에 각 object를 담아 전달
            <p>{menu.name}</p> 
        </div>
    );
}

export default SiderbarItem;