import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';


const list= [{
  id:1,
  label:'Boleto Conta de luz',
  value:'300,00',
  date:'17/02/2022',
  type:0 //despesas
},

{
  id:2,
  label:'Boleto Centro Universitario Salesiano',
  value:'869,00',
  date:'10/02/2022',
  type:0
},
{
  id:3,
  label:'Pix Cliente',
  value:'6.000,00',
  date:'18/02/2022',
  type:1 //receita
}/*,
{
  id:4,
  label:'Tranferencia Cliente 2',
  value:'1.900,00',
  date:'17/19/2022',
  type:1
},
{
  id:5,
  label:'Boleto Vivo Fibra',
  value:'300,00',
  date:'10/02/2022',
  type:0
},
{
  id:6,
  label:'Boleto Sanasa',
  value:'369,00',
  date:'17/02/2022',
  type:0
}*/

]
export default function Home() {
  return (
   <View style={styles.container}>

    <Header name="Matheus Benini"/>

    <Balance saldo="9.250,90" gastos="-527,00"/>

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
    //backgroundColor: '#212121',
  },
  title:{
    color:'#dadada',
  fontSize:18,
  fontWeight:'bold',
  marginRight: 14,
  marginLeft: 14,
  marginTop: 30,
  },

  list:{
    marginStart:14,
    marginEnd:14,

  }
});
