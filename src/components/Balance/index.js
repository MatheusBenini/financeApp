import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {MotiView} from 'moti'

export default function Balance({ saldo, gastos}) {
 return (
   <MotiView 
   style={styles.container}
   from={{
    opacity:0,
   }}
   animate={{
    opacity:1,
   }}
   transition={{
    type:'timing',
    delay: 300,
    duration: 900,
   }}
   
   
   >

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Saldo</Text>
    
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
            </View>
        </View>

        <View style={styles.item}>
            <Text style={styles.itemTitle}>Gastos</Text>
    
                <View>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
            </View>
        </View>

        
    </MotiView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#434242',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingStart:18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd:14,
        borderRadius:4,
        paddingTop:22,
        paddingBottom: 22,
        zIndex:99,

    },

    itemTitle:{
        fontSize:20,
        color:'#dadada'
    },

    content:{
        flexDirection:'row',
        alignItems:'center',
    },

    currencySymbol:{
        color: '#DADADA',
        marginRight: 6,

    },

    balance:{
        color: '#2ecc71',
        fontSize:22,

    },

    expenses:{
        color:'#e74c3c',
        fontSize:22,
    }


    /*item:{


    }*/

})