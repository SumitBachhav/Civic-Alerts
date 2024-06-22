import { StyleSheet, ScrollView, View, Text, Pressable, Button } from "react-native"
import { data } from "./data"
import { useSelector } from "react-redux"

const DisplayNotification = () => {

    function onpr() {
        // console.log("comment from func2")
        // console.log(typeof(data[0].date))
        d = new Date(data[0].date)
        // console.log(typeof(d))
        console.log(d.getFullYear())
        // console.log(d.getMonth())
        // console.log(d.getDate())
        // td = new Date()
        // console.log(td)
    };

    const condition = useSelector(state => state.toggle.Value)

    

    return (
        <>
        <ScrollView style = {styles.container}>
            {/* <View>
                {data.map(({ id, date, heading, announcement }) => (
                        <Pressable style = {styles.card} onPress={onpr} key={id}>
                            <Text style = {styles.heading}>
                                {date} 
                            </Text>
                            <Text style = {styles.heading}>
                                {heading} 
                            </Text>
                        </Pressable>
                ))}
            </View> */}
            <View>
                {condition ?

                    data.filter(({id, heading, announcement}) => (
                        id < 5
                    )).map(({ id, date, heading, announcement }) => (
                        <Pressable style = {styles.card} onPress={onpr} key={id}>
                            <Text style = {styles.heading}>
                                {date} 
                            </Text>
                            <Text style = {styles.heading}>
                                {id}{" "}{heading} 
                            </Text>
                        </Pressable>
                ))

                :
                
                    data.filter(({id, heading, announcement}) => (
                        id > 4
                    )).map(({ id, date, heading, announcement }) => (
                        <Pressable style = {styles.card} onPress={onpr} key={id}>
                            <Text style = {styles.heading}>
                                {date} 
                            </Text>
                            <Text style = {styles.heading}>
                            {id}{" "}{heading} 
                            </Text>
                        </Pressable>
                ))
                }
            </View>
            
        </ScrollView>
        <View style = {styles.buttonContainer}>
            <Button title="+"/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 80,
        backgroundColor: '#FFA500',
        margin: 10,
        borderRadius: 10,
    },
    heading: {
        fontSize: 20,
    },
    buttonContainer:{
        marginBottom: 60,
        width: 40,
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
    container: {
        // position: 'static',
        marginTop: 60,
        marginBottom: 20
    }
})

export default DisplayNotification;




