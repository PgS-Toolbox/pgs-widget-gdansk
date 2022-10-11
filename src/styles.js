
const styles = () => ({
    root: {
        flexGrow: 1,
    },
    legend: {
        flexGrow: 1,
        // display: "flex",
        alignItems: "center"
    },
    title_image: {
        maxHeight: "50px",
        marginTop: "24px",
        display: 'block',
        marginLeft: "auto",
        marginRight: "auto"
    },
    listItem: {
        borderRadius: "1em",
    },
    listItemText: {
        color: "#1E988B" ,
        fontSize: "20px",
        fontWeight: "bold",
    },
    button_normal: {
        backgroundColor: "#015F85 !important",
        color: "#ffffff !important",
        fontWeight: "bold !important",
        borderRadius: "30px !important",
        marginLeft: "5px !important",
        marginRight: "5px !important",
        '&:hover': { 
          backgroundColor: "white !important",
          color: "#015F85 !important",
          borderColor: "#015F85 !important",
          fontWeight: "bold !important",
        }
    },
    text: {
        fontSize: "22px"
    },
    h2_style: {
        color: "#015F85",
        fontSize: "24px",
        fontWeight: "bold",
        marginBottm: "20px !important"
    },
    margin_bottom: {
        marginBottom: "20px",
    },
    h3_style: {
        color: "#1E988B",
        fontSize: "22px",
        fontWeight: "bold"
    },
    center_vertically: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    legend_icon: {
        marginRight: "10px",
        marginLeft: "10px",
    },
    legend_checkbox: {
        color: "#015F85 !important" 
    },
    legend_h3_style: {
        color: "#1E988B",
        fontSize: "22px",
        fontWeight: "bold"
    },
    leaflet_container: {
        width: "100%",
        height: "70vh"
    },
    app_bar: {
        backgroundColor: "#FFFFFF !important",
        color: "#015F85!important",
        fontWeight: "bold",
        fontSize: "26px",    
        alignItems: "center"
    },
    locate_icon: {
        width: "30px !important",
        height: "30px !important",
        backgroundColor: 'white', 
        "&:hover":  {
            cursor: "pointer",  
            backgroundColor: 'lightgrey'
          }
    },
    table_header: {
        color: "#1E988B" ,
        fontSize: "18px",
        fontWeight: "bold"
    },
    table_row: {
        fontSize: "16px",
        fontWeight: "600",
    },
    map_height: {
        height: "60vh",
        display: 'flex !important',
        flexDirection: 'column !important',
    }
  });

export default styles