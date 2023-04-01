import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CardMangas from '../Components/CardMangas';
import search from "../../assets/Search.png"
import { LinearGradient } from 'expo-linear-gradient';
export default function Mangas() {
  const [mangas, setMangas] = useState([]);
  const [originalMangas, setOriginalMangas] = useState([]);
  const [categorias, setCate] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://minga-host.onrender.com/mangas-form/view?page=${currentPage}`)
      .then(response => {
        if (response.data.mangas.length === 0) {
          setHasMore(false);
        } else {
          if (currentPage === 1) {
            setOriginalMangas(response.data.mangas);
          } else {
            setOriginalMangas(prevMangas => [...prevMangas, ...response.data.mangas]);
          }
        }
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [currentPage, searchQuery]);

  useEffect(() => {
    axios.get("https://minga-host.onrender.com/mangas-form")
      .then(response => {
        setCate(response.data.categories);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setCurrentPage(1);
    setOriginalMangas([]);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const filteredMangas = originalMangas.filter(manga => {
    return manga.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (



    <LinearGradient colors={['#000', '#d71b7b', '#d71b7b']} style={styles.container}>

      <View style={styles.containTotal}>
        <ScrollView>
          <View style={styles.fondoMangaImg}>
            <View style={styles.fondoManga}>

              <View style={styles.searchContainer}>
                <Image source={search} style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Find your manga here"
                  onChangeText={handleSearch}
                />
              </View>
            </View>
          </View>

          <View style={styles.sectionManga}>
            <Text style={styles.exploreMangas}>Explore Mangas</Text>

            <View style={styles.contCartas}>
              {filteredMangas.length > 0 &&
                filteredMangas.map((manga, index) => (
                  <CardMangas
                    key={index}
                    title={manga.title}
                    category={
                      categorias.find(cat => cat._id === manga.category_id)?.name
                    }
                    photo={{ uri: manga.cover_photo }}
                  />
                ))}
            </View>

            {loading && <Text>Loading...</Text>}
            {!loading && hasMore && (
              <Text style={styles.loadMoreButton} onPress={handleLoadMore}>
                Load more
              </Text>
            )}
            {!loading && !hasMore && (
              <Text style={styles.noMoreButton}>
                No more mangas to show
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </LinearGradient>


  );
}

const styles = {
  containTotal: {
    width: "100%",
    minHeight: "100%",
    justifyContent: "center",

  },
  container: {
    justifyContent: "center",
    alignItems: "center",



  },
  fondoMangaImg: {
    width: "100%",
  },
  fondoManga: {
    width: "100%",
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
    color: "white"
  },
  searchContainer: {
    flex: 1,
    height: 40,
    backgroundColor: 'rgba(228, 228, 228, 0.7)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 100,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,

  },
  sectionManga: {
    flex: 1,
    padding: 10,
    width: "100%",

    borderRadius: 20,
    alignItems: "center",
    flexDirection: "column",
    marginTop: 50,
  },
  exploreMangas: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffff',
  },
  contCartas: {
    justifyContent: "center",
    alignItems: "center"
  },
  loadMoreButton: {
    color: '#ffff',
  }
}