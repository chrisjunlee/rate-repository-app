import {Text, StyleSheet, Image, View} from 'react-native'
import appTheme, { style } from '../theme'

const itemStyle = StyleSheet.create({
  image: {
    width: appTheme.smallImage.width,
    height: appTheme.smallImage.height,
    margin: 8,
    borderRadius: 5,
  },
  listHeader: {
    padding: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: "white",
    flex: 1
  },
  subheaderText: {
    color: appTheme.textColors.light
  },
  flexViewRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: 1,
  },
  flexViewRowEvenly: {
    display: 'flex',
    flexDirection: 'row',
    margin: 3,
    justifyContent: 'space-evenly'
  },
  flexViewCol: {
    display: 'flex',
    flexDirection: 'column',
    margin: 3,
    justifyContent: 'space-evenly',
    flexShrink: 10
  },
  flexButton: {
    flex: 1,
    marginRight: 5,
    marginLeft: 5
  },
  detailView: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  languageBox: {
    backgroundColor: appTheme.colors.primary,
    color: appTheme.textColors.contrast,
    padding: 5,
    marginTop: 3,
    flexShrink: 20,
    marginRight: 'auto',
    borderRadius: 3
  },
  bottomButton: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: appTheme.smallImage.width,
    height: appTheme.smallImage.height,
    borderRadius: appTheme.smallImage.height / 2,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: appTheme.colors.secondary,
    marginRight: 10,
  },
  ratingText: {
    fontSize: appTheme.textProperties.defaultSize,
    fontWeight: appTheme.textProperties.boldWeight,
    textAlign: 'center',
  }
})

const formatK = (num) => {
  return num >= 1000? String(Math.round(num/100)/10 + 'k') : num;
};

const RepositoryItem = ({item}) => (
  <View style={style.view} >
    <View style={itemStyle.flexViewRow}>
      <Image style={itemStyle.image} source={{uri:item.ownerAvatarUrl}} />
        <View style={ itemStyle.flexViewCol }>
          <Text style={itemStyle.title}>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={ itemStyle.languageBox }>{item.language}</Text>
        </View>
    </View>
    <View style={ itemStyle.flexViewRowEvenly }>
      <View style={ itemStyle.flexViewCol}>
        <Text style={itemStyle.detailView}> {formatK(item.stargazersCount)} </Text>
        <Text style={itemStyle.subheaderText}>Stars</Text>
      </View>
      <View style={ itemStyle.flexViewCol }>
        <Text style={itemStyle.detailView}> {formatK(item.forksCount)} </Text>
        <Text style={itemStyle.subheaderText}>Forks</Text>
      </View>
      <View style={itemStyle.flexViewCol}>
        <Text style={itemStyle.detailView}> {formatK(item.reviewCount)} </Text>
        <Text style={itemStyle.subheaderText}>Reviews</Text>
      </View>
      <View style={ itemStyle.flexViewCol}>
        <Text style={itemStyle.detailView}> {item.ratingAverage} </Text>
        <Text style={itemStyle.subheaderText}>Rating</Text>
      </View>
    </View>
  </View>)

export default RepositoryItem