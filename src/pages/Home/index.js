import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';


const list= [{
  id:1,
  label:'CPFL',
  value:'300,00',
  date:'17/02/2022',
  type:0 //despesas
},

{
  id:2,
  label:'Centro Universitario Salesiano',
  value:'869,00',
  date:'10/02/2022',
  type:0
},
{
  id:3,
  label:'Pix Cliente',
  value:'7.350,00',
  date:'18/02/2022',
  type:1 //receita
},
{
  id:4,
  label:'Tranferencia Cliente 2',
  value:'10.000,00',
  date:'17/19/2022',
  type:1
},
{
  id:5,
  label:'Vivo',
  value:'300,00',
  date:'10/02/2022',
  type:0
},
{
  id:6,
  label:'Sanasa',
  value:'369,00',
  date:'17/02/2022',
  type:0
}

]
export default function Home() {
  return (
   <View style={styles.container}>

    <Header name="Matheus Benini"/>

    <Balance saldo="17.350,90" gastos="-1.838,00"/>

    <Actions/>

    <Text style={styles.title}>Últimas Movimentações</Text>

    <FlatList 
    style={styles.list}
    data={list}
    keyExtractor={ (item) => String(item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={ ({item}) =>  <Moviments data={item}/> }
    />
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
  },
  title:{
    color:'#dadada',
  fontSize:18,
  fontWeight:'bold',
  margin: 14,
  
  },

  list:{
    marginStart:14,
    marginEnd:14,

  }
});
