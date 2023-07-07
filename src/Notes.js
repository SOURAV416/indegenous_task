import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('https://api.gyanibooks.com/library/get_dummy_notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom style={{ color: '#333', marginBottom: '20px' }}>
        The Indegenous Frontend Task
        </Typography>
      </Grid>
      {notes.map((note) => (
        <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ height: '100%', backgroundColor: '#F5F5F5', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ marginBottom: '8px', color: '#333' }}>
                {note.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom sx={{ marginBottom: '8px', color: '#666' }}>
                Category: {note.category}
              </Typography>
              <Typography variant="body2" component="p" sx={{ color: '#555' }}>
                {note.notes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Notes;
