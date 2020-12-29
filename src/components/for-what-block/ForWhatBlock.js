import React, {useState} from "react";
import classNames from "classnames";

import styles from './ForWhatBlock.module.css';
import InfoMenuItem from "../info-menu-item/InfoMenuItem";
import InfoBlock from "../info-block/InfoBlock";
import BlockHeader from "../block-header/BlockHeader";
import CircleAnimation from "../circle-animation/CircleAnimation";
import AnimatedLine from "../animated-line/AnimatedLine";

const header = {
    title: 'For what',
    description: 'we use the best technologies to enhance your product'
};

const ForWhatBlock = ({forWhat}) => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleInfoBlock = (e, item) => {
        e.stopPropagation();
        setActiveItem(item);
    };

    return (
        <div className={styles.forWhat}>
            <div className={styles.header}>
                <BlockHeader header={ header } />
            </div>

            <div className={ styles.content }>
                <div className={ styles.info }>
                    <div className={classNames( 'accent-text', styles.infoMenu )}>
                        {
                            forWhat?.length &&
                            forWhat[0]?.reasons?.map((item) => {
                                return <InfoMenuItem key={item?.id}
                                                     toggleInfoBlock={toggleInfoBlock}
                                                     activeItem={activeItem}
                                                     item={item}/>
                            })
                        }

                    </div>

                    <div className={styles.animatedLine}>
                        {
                            forWhat?.length &&
                            forWhat[0]?.reasons?.map((item) => {
                                return <AnimatedLine key={item?.id}
                                                     toggleInfoBlock={toggleInfoBlock}
                                                     activeItem={activeItem}
                                                     mode={'right'}
                                                     item={item} />
                            })
                        }
                    </div>

                    <div className={classNames(
                        styles.infoBlockWrapper,
                        activeItem ? styles.widthTransition : '',
                        activeItem ? styles.opacityTransition : ''
                    )}>
                        <div className={classNames(
                            styles.infoBlockContent,
                            activeItem ? styles.opacityTransition : ''
                        )}>
                            <InfoBlock activeItem={ activeItem }
                                       options={{ isDivider: true, isTitle: true }}/>
                        </div>
                    </div>
                </div>

                <div className={classNames(
                    styles.circleWrapper,
                    activeItem ? styles.circleWrapperShifted : ''
                )}>
                    <CircleAnimation />
                </div>
            </div>
        </div>
    )
};

export default ForWhatBlock;
