import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const CATEGORY_CARDS: Record<string, { bestCard: string; issuer: string; rate: string }> = {
  dining: { bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%' },
  restaurant: { bestCard: 'Gold Card', issuer: 'American Express', rate: '4x' },
  travel: { bestCard: 'Venture X', issuer: 'Capital One', rate: '5x' },
  groceries: { bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%' },
  gas: { bestCard: 'Custom Cash', issuer: 'Citi', rate: '5%' },
  streaming: { bestCard: 'Blue Cash Preferred', issuer: 'American Express', rate: '6%' },
  online: { bestCard: 'Sapphire Preferred', issuer: 'Chase', rate: '1x' },
  drugstore: { bestCard: 'Freedom Flex', issuer: 'Chase', rate: '3%' },
};

const QUICK_CATEGORIES = [
  { name: 'Dining', icon: '🍽️', key: 'dining' },
  { name: 'Travel', icon: '✈️', key: 'travel' },
  { name: 'Groceries', icon: '🛒', key: 'groceries' },
  { name: 'Gas', icon: '⛽', key: 'gas' },
  { name: 'Streaming', icon: '📺', key: 'streaming' },
  { name: 'Online', icon: '🛍️', key: 'online' },
];

type Recommendation = {
  bestCard: string;
  issuer: string;
  rate: string;
} | null;

export default function App() {
  const [search, setSearch] = useState('');
  const [recommendation, setRecommendation] = useState<Recommendation>(null);

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    for (const [key, value] of Object.entries(CATEGORY_CARDS)) {
      if (key.includes(q) || q.includes(key)) {
        setRecommendation(value);
        return;
      }
    }
    setRecommendation(null);
  };

  const handleCategoryPress = (key: string) => {
    setRecommendation(CATEGORY_CARDS[key] || null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>OC</Text>
          </View>
          <Text style={styles.title}>OneCard</Text>
        </View>

        <Text style={styles.subtitle}>Find the best card for your purchase</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search merchant or category..."
            placeholderTextColor="#666"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={() => handleSearch(search)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch(search)}>
            <Text style={styles.searchButtonText}>Find</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Quick Categories</Text>
        <View style={styles.categories}>
          {QUICK_CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(cat.key)}
            >
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {recommendation && (
          <View style={styles.recommendation}>
            <Text style={styles.recHeader}>Best Card</Text>
            <View style={styles.cardPreview}>
              <Text style={styles.cardName}>{recommendation.bestCard}</Text>
              <Text style={styles.cardIssuer}>{recommendation.issuer}</Text>
            </View>
            <View style={styles.rateContainer}>
              <Text style={styles.rateValue}>{recommendation.rate}</Text>
              <Text style={styles.rateLabel}>rewards</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#8b5cf6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
    fontSize: 16,
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 14,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  searchButton: {
    backgroundColor: '#8b5cf6',
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  categoryCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 16,
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  categoryIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  categoryName: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  recommendation: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  recHeader: {
    color: '#888',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  cardPreview: {
    backgroundColor: '#4a90d9',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  cardName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardIssuer: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  rateValue: {
    color: '#8b5cf6',
    fontSize: 32,
    fontWeight: 'bold',
  },
  rateLabel: {
    color: '#888',
    fontSize: 16,
  },
});
