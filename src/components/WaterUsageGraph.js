import { Box, Text } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { purpose: 'Irrigation', usage: 40 },
  { purpose: 'Others', usage: 60 },
];

export const WaterUsageGraph = () => {
  return (
    <Box p="20px" width="50%" bg="white" borderRadius="10px" boxShadow="sm">
      <Text fontWeight="bold" mb="4">Monthly Water Usage</Text>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap={1}>
          <defs>
            <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3182CE', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#42CB8F', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <XAxis dataKey="purpose" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="usage" fill="url(#colorGradient)" barSize={30} /> {/* Adjust barSize for width */}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
