import React, { useContext } from 'react';
import { TabBar } from 'antd-mobile';
import { NavfooterContext } from '../../utils/context';

export default function Navfooter() {

    const navList = useContext(NavfooterContext);

    return (
        <TabBar>
            {
                navList.map((nav) => {
                    console.log(nav);
                    return <TabBar.Item key={nav.path}
                        icon={{ uri: require(`../../assets/icon/${nav.icon}.png`) }}
                        selectedIcon={{ uri: require(`../../assets/icon/${nav.icon}-selected.png`) }}
                        selected={window.location.pathname === nav.path}
                        title={nav.text}
                        onPress={() => window.location.replace(nav.path)} />
                })
            }
        </TabBar>
    )
}
