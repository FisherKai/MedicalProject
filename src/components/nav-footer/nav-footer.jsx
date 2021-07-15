import React, { createContext, useContext } from 'react';
import { TabBar } from 'antd-mobile';
import { NavfooterContext } from '../../utils/context';

export default function Navfooter() {

    const navList = useContext(NavfooterContext);

    return (
        <TabBar>
            {
                navList.map((nav) => {
                    console.log(nav);
                    console.log(<TabBar.Item key={nav.path}
                        icon={{ uri: require(`../../assets/icon/${nav.icon}.png`) }}
                        selectedIcon={{ uri: require(`../../assets/icon/${nav.icon}-selected.png`) }}
                        selected={window.location.pathname === nav.path}
                        onPress={() => window.location.replace(nav.path)} />);
                    return <TabBar.Item key={nav.path}
                        icon={{ uri: require(`../../assets/icon/${nav.icon}.png`) }}
                        selectedIcon={{ uri: require(`../../assets/icon/${nav.icon}-selected.png`) }}
                        selected={window.location.pathname === nav.path}
                        onPress={() => window.location.replace(nav.path)} />
                })
            }
        </TabBar>
    )
}
