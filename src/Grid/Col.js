import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export const Col = ({ centered, col, sm, md, lg, xl, ...props }) => {
    return <div {...props} className={cn(
        `col`,
        col ? `col_${col}` : undefined,
        sm ? `col_sm_${sm}` : undefined,
        md ? `col_md_${md}` : undefined,
        lg ? `col_lg_${lg}` : undefined,
        xl ? `col_xl_${xl}` : undefined,
        centered ? 'centered' : undefined,
        props.className
    )}>{props.children}</div>
}

Col.propTypes = {
    children: PropTypes.node.isRequired,
    /** Pass className into the div. */
    className: PropTypes.string,
    col: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']),
    sm: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']),
    md: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']),
    lg: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']),
    xl: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']),
    centered: PropTypes.bool,
}
Col.defaultProps = {
    centered: false,
    // col: '12',
}

export default Col

// const StyledCol = styled.div`
//     position: relative;
//     width: 100%;
//     min-height: 1px;
//     padding-right: 15px;
//     padding-left: 15px;
//     ${props =>
//         props.col &&
//         css`
//             -ms-flex: 0 0 ${(100 / 12) * props.col}%;
//             flex: 0 0 ${(100 / 12) * props.col}%;
//             max-width: ${(100 / 12) * props.col}%;
//         `}
//     ${props =>
//         props.sm &&
//         css`
//             @media (min-width: 576px) {
//                 -ms-flex: 0 0 ${(100 / 12) * props.sm}%;
//                 flex: 0 0 ${(100 / 12) * props.sm}%;
//                 max-width: ${(100 / 12) * props.sm}%;
//             }
//         `}
//     ${props =>
//         props.md &&
//         css`
//             @media (min-width: 768px) {
//                 -ms-flex: 0 0 ${(100 / 12) * props.md}%;
//                 flex: 0 0 ${(100 / 12) * props.md}%;
//                 max-width: ${(100 / 12) * props.md}%;
//             }
//         `}
//     ${props =>
//         props.lg &&
//         css`
//             @media (min-width: 992px) {
//                 -ms-flex: 0 0 ${(100 / 12) * props.lg}%;
//                 flex: 0 0 ${(100 / 12) * props.lg}%;
//                 max-width: ${(100 / 12) * props.lg}%;
//             }
//         `}
//     ${props =>
//         props.xl &&
//         css`
//             @media (min-width: 1200px) {
//                 -ms-flex: 0 0 ${(100 / 12) * props.xl}%;
//                 flex: 0 0 ${(100 / 12) * props.xl}%;
//                 max-width: ${(100 / 12) * props.xl}%;
//             }
//         `}
//     ${props =>
//         props.centered &&
//         css`
//             text-align: center;
//         `}
// `
