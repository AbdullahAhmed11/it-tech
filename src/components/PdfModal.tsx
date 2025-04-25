import { Modal, Box, Typography, Button } from '@mui/material';

const PdfModal = ({ open, handleClose }: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            xs: '90%',     // small screens
            sm: '80%',     // tablets
            md: 600,       // medium screens
            lg: 700,       // large screens
          },
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Course Name
        </Typography>
        <Typography sx={{ mt: 2, mb: 2 }}>PDF Course.</Typography>

        <div className='flex flex-col gap-3'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='w-full bg-gray-200 p-3 rounded-lg'>
              <p className='text-gray-500 font-medium'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste qui hic blanditiis eaque sed illo vero, deserunt corrupti enim accusantium voluptas doloribus iusto voluptatem laborum ut libero dolor id magnam.
              </p>
            </div>
          ))}
        </div>

        <Button
          onClick={handleClose}
          variant="contained"
          sx={{ mt: 3 }}
          fullWidth
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PdfModal;
