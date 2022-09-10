import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
.app-bg-dark{
    background-color:${({ theme }) => theme.appbgdark}!important;
}
.navbar-dark .navbar-nav .nav-link {
    color: ${({theme})=>theme.navcolor} !important;
}
.blue_back {
    background-color: ${({theme})=>theme.blueblack};
}
.table.coins_table td {
    color: ${({theme})=>theme.tablecolor};
    text-transform: ${({theme})=>theme.texttrans}; 
}
.balance{
    color:${({theme})=>theme.balance}
}
.dark_blue {
    background-color: ${({theme})=>theme.darkblue};
},
.menu a {
  
    color:${({theme})=>theme.colorm};
    border-bottom: ${({theme})=>theme.borderm}!important;
}
.dark_grey {
    background-color:${({theme})=>theme.darkgrey} !important;
}
.head_pad {
    margin: 0;
    font-size: ${({theme})=>theme.headfont};
    color: ${({theme})=>theme.headc};
    padding: 7px 10px 7px;
    background: ${({theme})=>theme.headbg};
}
.nav-tabs{
    border-bottom:0;
    background-color:${({theme})=>theme.navtab}
}
.nav-tabs.tabs .nav-link.active {
    background-color:${({theme})=>theme.navatabbga};
    border-radius: 0;
    color: ${({theme})=>theme.activetabcolor} !important;
}
.nav-tabs .nav-link {
    margin-bottom: 0px;
    border-radius: 0;
    background: ${({theme})=>theme.navlinkbg};
    color: ${({theme})=>theme.navlinkcol};
    border: 0 !important;
}
.footer_area {
    background-color: ${({theme})=>theme.footerbg};
    padding: 40px 0;
}
.footer_area ul li a {
    color: ${({theme})=>theme.footercol};
    text-decoration: none;
    padding: 5px 0;
    display: block;
}
.table.coins_table th {
    color: ${({theme})=>theme.tblcol};
}
.border_1 {
    border: ${({theme})=>theme.border1};
}
.table>:not(:first-child) {
    border-top:${({theme})=>theme.tblbor};
}
.open_order_area a {
    margin-left: 10px;
    padding: 1px 10px;
    display: inline-block;
    font-size: 13px;
    color: ${({theme})=>theme.orderarecolor};
}
.accountbg{
    background: ${({theme})=>theme.accountbackground}
}
.cardchild{
    background: ${({theme})=>theme.cardchildbg};
    box-shadow: ${({theme})=>theme.cardshadow} !important;
    transation:"ease-in-out 2s !important"
}
.cardchild:hover{
    background:${({theme})=>theme.cardhover};
}

.acctext{
     color:${({theme})=>theme.childtext}
}
.cardtext{
    color:${({theme})=>theme.cardtextcolor}
},
.headercard{
    background:${({theme})=>theme.cardheadbg} !important;
    color:${({theme})=>theme.cardheadcol}!important

}
.tablebackground{
    background:${({theme})=>theme.tablebackground}
}
.tblecol{
    color:${({theme})=>theme.tblcolor}
},
.dropdown-menu-dark{
    background-color:${({theme})=>theme.memub}!important;
}
`;
